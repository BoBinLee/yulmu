import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { Work1, Work2, Work3, Work4, Work5, WorkIntroduction } from '../components/Work';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import { mq } from '../utils/StyleUtils';

const Root = styled('div') `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;

     ${ mq.desktop`
        padding-top: 213px;
     `}
`;

const IntroBox = styled('div') `
    height: 284px;
`;

const WorkBox = styled('div') `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    ${ mq.desktop`
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 36px;
    ` }
`;

const Divider = styled('div') `
    grid-column: 1/3;
    height: 2px;
    background-color: #eee;
    margin-top: 81px;
`;

class Work extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <Introduction />
            <WorkBox>
                <WorkIntroduction
                    data-aos="fade-up"
                    data-aos-offset="350"
                />
                <Work1
                    data-aos="fade-up"
                    data-aos-offset="350" />
                <Work2
                    data-aos="fade-up"
                    data-aos-offset="350"
                />
                <Work3
                    data-aos="fade-up"
                    data-aos-offset="350"
                />
                <Work4
                    data-aos="fade-up"
                    data-aos-offset="350"
                />
                <Work5
                    data-aos="fade-up"
                    data-aos-offset="350"
                />
                <Divider />
            </WorkBox>
            <Footer />
        </Root>);
    }
}

export default Work;
