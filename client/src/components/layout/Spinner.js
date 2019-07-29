import React from 'react';
import spinner from './spinner.gif';

export default () => (
    <React.Fragment>
        <img
            src={spinner}
            style={{ width: '50px', margin: 'auto', display: 'block' }}
            alt=''
        />
    </React.Fragment>
);  