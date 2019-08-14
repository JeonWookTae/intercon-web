import React, {Fragment} from 'react';
import {observer} from 'mobx-react'

const WrapperStyle = {
    'display': 'flex',
    'width': '100%'
};

const Wrapper: React.FC = observer(({children}) => {
    return (
        <div style={WrapperStyle}>
            {children}
        </div>
    )
});

export default Wrapper;
