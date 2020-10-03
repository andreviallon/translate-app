import Header from './header';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const Main = styled.div`
    padding-top: 7rem;
`;

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Main>{children}</Main>
                    </Col>
                </Row>            
            </Container>
        </>
    )
}
