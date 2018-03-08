import React, { Component } from 'react';

class EmbedVideo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class="embedded-video">
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.props.extension}
                    frameborder="0" allowfullscreen></iframe>
            </div>  
        );
    }
}

export default EmbedVideo;