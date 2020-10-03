import { useState } from "react";
import Header from './header';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../core/theme";
import { GlobalStyles } from "../core/global";

const Main = styled.div`
    padding-top: 7rem;
`;

export default function Layout({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => theme === "light" ? setTheme("dark") : setTheme("light");

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Main>{children}</Main>
                            <button onClick={toggleTheme}>Toggle theme</button>
                        </Col>
                    </Row>
                </Container>
            </>
        </ThemeProvider>
    );
}
