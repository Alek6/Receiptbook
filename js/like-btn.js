import React from 'react';

this.setState = function ( obj ) {
    if (obj.getProperty("piaciuto") === true) {
        this.innerHTML("Mi Piace!");
    } else {
        this.innerHTML("Non mi piace");
    }
}

function showButton() {
    return (<button onClick = {() => this.setState({ piaciuto: true })}>Mi Piace</button>);
}