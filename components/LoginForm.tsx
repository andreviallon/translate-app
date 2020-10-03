import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const CenterPageContent = styled.div`
    height: 100%;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 2rem;
`;


export default function LoginForm() {
    return (
        <CenterPageContent>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={6} offset={{ md: 2, lg: 3 }}>
                        <FlexContainer>
                            <H1>Welcome to Translate App</H1>
                        </FlexContainer>
                    </Col>
                </Row>
            </Container>
        </CenterPageContent>
    )
}
