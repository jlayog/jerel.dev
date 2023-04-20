import React from "react";
import { projects } from "../datalist";
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';

const ProjectCard = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h2 className="text-center text-white">
            Things I've Built
          </h2>
          <p className="text-center">
            These are live sites requested by clients, and personal projects.
          </p>
        </div>
        <Container fluid>
          <Row xs={1} sm={2} md={3} className="g-4">
          {projects.map((project) => (
            <Col md={6} key={project.title}>
              <Card bsPrefix="projectCard">
                <a href={project.link}><Card.Img variant="top" src={project.image} /></a>
                <Card.Body>
                  <Card.Title className="text-white">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ProjectCard;