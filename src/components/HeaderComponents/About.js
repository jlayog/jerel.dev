import React from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import DialogBox from './DialogBox';
import Witch from './Witch';



const About = () => {
    return(
        <section id="about">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Witch />
                        <DialogBox />
                    </Col>
                </Row>
            </Container>
        </section>
    )   
}

export default About;