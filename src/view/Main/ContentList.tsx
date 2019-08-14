import React from 'react';
import {Nav} from 'react-bootstrap'

const ContentList: React.FC = () => {
    return (
        <div className="container">
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Main</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default ContentList;
