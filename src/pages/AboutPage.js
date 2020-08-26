import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (

        <div>
            <Hero title={props.title} />
            <Content>
                <p className="lead">I am aspiring to become a fullstack web developer.</p>
                <p className="lead"></p>
            </Content>
        </div>
    );
}

export default AboutPage;