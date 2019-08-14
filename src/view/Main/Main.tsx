import React from 'react';
import {Card, Button, Nav} from 'react-bootstrap';


const Main: React.FC = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Nav.Link href='/menu'><Button variant="outline-primary">button</Button></Nav.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Main;
