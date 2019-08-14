import React from 'react';
import {Nav} from 'react-bootstrap'

let MenuContents = [
    {
        'name': '시작 합니다.'
    },
    {
        'name': '이것은 무엇인가 할 겁니다.'
    }
];

interface MenuProps {
    hasmenu?: boolean
}

const MenuStyle = {
    'display': 'flex',
    'align-items': 'stretch',
    'width': '250px',
    'top': '0',
    'left': '0',
    'height': '100vh',
    'z-index': '999',
    'background': '#7386D5',
    'color': '#fff',
    'transition': 'all 0.3s'
};

const Menu: React.FC = () => {
    let MenuLayout = MenuContents.map((data) => {
        return (<Nav.Link herf="/">{data.name}</Nav.Link>)
    });

    return (
        <Nav defaultActiveKey="/" className='align-items-lg-stretch bg-info' style={MenuStyle}>
            <Nav.Link href="/">Menu</Nav.Link>
            {MenuLayout}
        </Nav>
    );
};

export default Menu;
