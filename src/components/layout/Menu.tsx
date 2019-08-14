import React from 'react';
import {Nav} from 'react-bootstrap'

let MenuContents = [
    {
        'name': '보러 가기',
        'to': '/contents'
    },
    {
        'name': '만들러 가기',
        'to': '/123'
    }
];

const MenuStyle = {
    'display': 'flex',
    'width': '250px',
    'top': '0',
    'left': '0',
    'height': '100vh',
    'z-index': '999',
    'background': '#7386D5',
    'color': '#fff',
    'transition': 'all 0.3s'
};

const MenuFontStyle = {
    'color': '#fff',
    'fontSize': '0.9em',
    'paddingLeft': '30px'
};

const MenuComponentStyle = {
    'padding': '20px 0',
    'border-bottom': '1px solid #47748b'
};

const Menu: React.FC = () => {
    let MenuLayout = MenuContents.map((data) => {
        return (
            <ul className="list-unstyled" style={MenuComponentStyle}>
                <li>
                        <a href={data.to} style={MenuFontStyle}>{data.name}</a>
                </li>
            </ul>
        )
    });

    return (
        <div style={MenuStyle}>
            <Nav defaultActiveKey="/" className="flex-column">
                <div className="container text-center pt-4 pb-2">
                    <h3>INTERCON</h3>
                </div>
                <div className='container text-left'>
                    {MenuLayout}
                </div>
            </Nav>
        </div>
    );
};

export default Menu;
