import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'react-grid-system';
import { Formik, Field, Form } from 'formik';

interface Values {
    fromLanguage: string;
    toLanguage: string;
}

const FormikStyles = styled.div`
    display: flex;
    flex-direction: column;

    select, input {
        border: 2px solid ${({ theme }) => theme.lightPrimary};
        padding: 0.8rem;
        border-radius: 8px;
        font-size: 1.1rem;
        width: 100%;
        -webkit-appearance: none;
        outline: none;
    }
`;

const Label = styled.label`
    display: flex;
    font-size: 1.2rem;
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

    &:hover {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
        filter: brightness(90%);
    }
`;


const Translate = () => {
    const handleTranslation = (values: Values) => {
        console.log('values =>', values);
    }

    const languages: string[] = [
        'english',
        'danish',
        'french'
    ];

    return (
        <>
            <Formik initialValues={{ fromLanguage: 'english', toLanguage: 'danish' }} onSubmit={(values: Values) => { handleTranslation(values) }}>
                <Form>
                    <FormikStyles>
                        <Row>
                            <Col sm={12} md={6}>
                                <Label htmlFor="fromLanguage">from</Label>
                                <Field as="select" name="fromLanguage">
                                    {languages.map((language) => <option key={language} value={language}>{language}</option>)}
                                </Field>
                            </Col>
                            <Col sm={12} md={6}>
                                <Label htmlFor="toLanguage">to</Label>
                                <Field as="select" name="toLanguage">
                                    {languages.map((language) => <option key={language} value={language}>{language}</option>)}
                                </Field>
                            </Col>
                        </Row>
                    </FormikStyles>
                </Form>
            </Formik>
        </>
    )
}

export default Translate
