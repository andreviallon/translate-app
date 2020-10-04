import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { GlobalStyles } from "../core/global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../core/theme";
import { Formik, Field, Form } from 'formik';

interface Values {
    email: string;
    password: string;
}

const FlexContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

const H1 = styled.h1`
    font-size: 1.7rem;
`;

const Info = styled.span`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.mediumGray};
    font-weight: 500
`;

export default function LoginForm() {
    
    const handleLogin = (values: Values) => {
        console.log('values', values);
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
                        <FlexContainer>
                            <H1>Welcome to Translate App</H1>
                            <Info>Please log in to continue</Info>
                            <Formik initialValues={{ email: '', password: '' }} onSubmit={(values: Values) => {handleLogin(values)}}>
                                <Form>
                                    <label htmlFor="email">email</label>
                                    <Field id="email" name="email" type="email"/>
                                    <label htmlFor="password">password</label>
                                    <Field id="password" name="password" type="password"/>
                                    <button type="submit">login</button>
                                </Form>
                            </Formik>
                        </FlexContainer>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    )
}
