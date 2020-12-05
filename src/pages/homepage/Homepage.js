import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory';

const Homepage=()=>{

    return(
        <div className='homepage'>
        <h1>This is HomePage!</h1>
        <Directory />
        </div>
    )

};

export default Homepage;