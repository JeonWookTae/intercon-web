import React, {Fragment} from 'react';
import {Card, Button} from 'react-bootstrap'

interface ContextProps{
    index?: number
}


const ContentContext: React.FC<ContextProps> = (index) => {
    return (
        <div className="container">
            <Card style={{ width: '100%', height: "90%", position:"relative"}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                    <div style={{position: 'fixed', bottom: '0'}}>
                    </div>


                        <div style={{height:"8%", position:"absolute", bottom:"0px"}}>
                            <Card.Link href="#">
                                <Button>다음으로</Button>
                            </Card.Link>
                        </div>

                </Card.Body>
            </Card>
        </div>

    );
};

export default ContentContext;
