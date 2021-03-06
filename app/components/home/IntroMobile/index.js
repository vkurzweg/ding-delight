/**
*
* Intro
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


const StyledHeader = styled.h1`
  color: #9C27B0;
  font-family: 'Lobster';
  text-align: center;
  font-size: 72px;
  font-weight: normal;
  margin-top: 0;
  padding-top: 3%;
`;

const Button = styled.button`
  font-family: 'Josefin Sans';
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight; bold;
  background-color: #2FF6CE;
  color: #000000;
  font-size: 24px;
  padding: 3%;
  display: block;
  width: 13em;
  margin: 0 auto;
  border: none;
  margin-top: 10%;
  &:hover {
    background-color: #7C4DFF;
  }
`;


class Intro extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(key) {
    this.setState({ currentTab: key });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#000000', color: '#F5F5F5', fontFamily: 'Josefin Sans' }}>
        <Image cloudName="kurzweg" publicId="ding_bw_fullsize" responsive style={{ width: '100%' }} />
        <div className="container">
          <div className="row" style={{ fontFamily: 'Lobster Two', color: '#ECECEC', textAlign: 'center', paddingTop: '1em' }}>
            <h1 className="col-sm-12" style={{ color: '#2FF6CE', paddingTop: '3%', fontSize: '46px' }}>don't worry keiki, we're not flakey</h1>
          </div>
          <div className="row" style={{ paddingBottom: '5%' }}>
            <div className="col-sm-12" style={{ padding: '5%' }}>
              <p style={{ width: '100%', margin: '0 auto', fontSize: '20px', marginTop: '10%', lineHeight: '2.5em' }}>If you love your boards the way we do, you understand how devastating it can be when they get damaged. We want to help you get back out there as quickly and brudda brudda pricewise as possible.</p>
              <a href="http://www.alohabrothers.surf/contact" target="blank" style={{ textDecoration: 'none' }} ><Button className="btn btn-default">Get a Quote</Button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {

};

export default Intro;
