import React from 'react';

const domContainer = document.querySelector('#like-button-container');
ReactDOM.render(e(LikeButton), domContainer);

const e = React.createElement;

function f(e) {
    return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
    );
    console.log(this.toString());
}