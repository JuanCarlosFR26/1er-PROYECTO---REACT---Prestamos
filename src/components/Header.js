import React, { Fragment } from 'react';

// En vez de props, usamos destructuring
function Header({ titulo }) {



    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

/* 
La diferencia con esta funcion, es que esta podria ser una funcion flecha sin return ni llaves

const Header  = ({titulo}) => {
    return ( 
                <Fragment>
                    <h1>{ titulo }</h1>
                </Fragment>
     );
}

Quedaria asi: 

cont Header = ({titulo}) => (
    <h1>{ titulo }</h1>
);
*/
 


export default Header;