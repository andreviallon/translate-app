import Header from './header';
import styled from 'styled-components';
import { useContext } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../core/theme";
import { GlobalStyles } from "../core/global";
import { ThemeContext, ThemeStateProvider, Theme} from "../context/theme/ThemeState";

const Main = styled.div`
    padding-top: 7rem;
`;

export default function Layout({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeStateProvider>
            <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Main>{children}</Main>
                            <p>theme: {theme}</p>
                        </Col>
                    </Row>
                </Container>
            </ThemeProvider>
        </ThemeStateProvider>
    );
}
