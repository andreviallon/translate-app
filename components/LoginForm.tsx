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

const CenterPageContent = styled.div`
    height: 100vh;
    margin: 0 auto;
`;

const FlexContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

const H1 = styled.h1`
    font-size: 1.7rem;
    margin: 0;
`;

const Info = styled.span`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.mediumGray};
    font-weight: 500;
    margin: 1rem 0;
`;

const FormikStyles = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;

    input {
        border: 2px solid ${({ theme }) => theme.lightPrimary};
        padding: 0.8rem;
        border-radius: 8px;
        font-size: 1.1rem;
    }
`;

const Label = styled.label`
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 1.2rem 0 0.3rem;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 100px;
    border: none;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.1s;
    margin-top: 2rem;
`;

const Anchor = styled.a`
    color: ${({ theme }) => theme.primary };
    margin-left: 0.3rem;
    font-weight: 600;
    cursor: pointer;
`;

const NoAccount = styled(Info)`
    margin-bottom: 4rem;
`;

export default function LoginForm() {
    
    const handleLogin = (values: Values) => {
        console.log('values', values);
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <CenterPageContent>
                <Container>
                    <Row>
                        <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
                            <FlexContainer>
                                <H1>Welcome to Translate App</H1>
                                <Info>Please log in to continue</Info>
                                <Formik initialValues={{ email: '', password: '' }} onSubmit={(values: Values) => {handleLogin(values)}}>
                                        <Form>
                                            <FormikStyles>
                                                <Label htmlFor="email">email</Label>
                                                <Field name="email" type="email"/>
                                                <Label htmlFor="password">password</Label>
                                                <Field name="password" type="password"/>
                                                <Button type="submit">Login</Button>
                                            </FormikStyles>
                                        </Form>
                                </Formik>
                                <NoAccount>Do not have an account?<Anchor>Sign up</Anchor></NoAccount>
                            </FlexContainer>
                        </Col>
                    </Row>
                </Container>
            </CenterPageContent>
        </ThemeProvider>
    )
}
