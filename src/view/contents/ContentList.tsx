import React, {Fragment} from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'

const ContentList: React.FC = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <Jumbotron>
                    <Container>
                        <h1>Fluid jumbotron</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                        <Button href="/context">
                            클릭하세yo
                        </Button>
                    </Container>
                </Jumbotron>
            </div>
        </Fragment>

    );
};

export default ContentList;
