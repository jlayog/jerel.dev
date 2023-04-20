import React from 'react';
import { skills } from '../datalist';
import { statsIcon } from '../datalist';
import { Container, Row, Col } from 'react-bootstrap';
import WitchCharge  from '../assets/B_witch_charge.gif';

const Skills = () => {
    return (
      <section id="skills">
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" className="text-center skills-col-title">                   
                    <h2 className="section-title">
                        Skills &amp; Technologies
                     </h2>
                </Col>
            </Row>
            <Row className='justify-content-center no-gutters'>
                <Col md={3} sm={12}>
                    <div className="witchCharge ">
                        <img src={WitchCharge} alt="gif of a Witch charging her powers" />
                    </div>
                </Col>
                <Col md={3} sm={12} className="">
                    <div className="pixel-border">
                        {statsIcon.map((icon, index) => (
                            <div key={icon}>
                                <img className="skill-icon" src={icon} alt="icon" />
                                <span className="skill-text">{skills[index]}</span>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={12} sm={12}>
                    <div className='dialogWindow2'>
                        <p className='dialogMessage'>Here are some technologies I have worked with.</p>
                    </div>
                </Col>
            </Row>    
        </Container>
      </section>
    )
  }

export default Skills;