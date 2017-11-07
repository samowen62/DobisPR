import React, { Component } from 'react';

class EmbedVideo extends Component {

    constructor(props){
        super(props);
        this.state = {
            extension: "https://www.youtube.com/embed/" + props.extension
        };
    }

    render() {
        return <iframe width="560" height="315" src={this.state.extension} frameborder="0" allowfullscreen></iframe>        
    }
}

export default EmbedVideo;