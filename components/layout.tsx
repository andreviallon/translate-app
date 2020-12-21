import Header from './header';
import styled from 'styled-components';
import { useContext, useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import { ThemeContext, Theme} from "../context/theme/ThemeState";

const Main = styled.div`
    padding-top: 7rem;
    width: 100%;
`;

export default function Layout({ children }) {
    const { theme, setInitTheme } = useContext(ThemeContext);
    
    useEffect(() => {
        setInitTheme();
    }, [])

    return (
        <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Header />
            <Container>
                <Row>
                    <Main>{children}</Main>
                </Row>
            </Container>
        </ThemeProvider>
    );
}
