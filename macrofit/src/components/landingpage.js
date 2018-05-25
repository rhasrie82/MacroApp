import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img
               src="http://www.athleticsireland.ie/images/homepage-slider/_mobile/1250767-opt.jpg"
               alt="runner"
               className="runner-image"/>

            <div className="banner-text">
                <h1>Macrofit</h1>
                
                <hr/>

                <p>Because your brain is the strongest muscle in your body</p>

            <div className="social-links">

            {/*Google*/}
            <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/*Github*/}
            <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/*Youtube*/}
            <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

            </div>
            </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;