/**
*
* Intro
*
*/

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #9C27B0;
  font-family: 'Lobster';
  text-align: center;
  font-size: 72px;
  font-weight: normal;
  margin-top: 0;
  padding-top: 3%;
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
        <StyledHeader>
          fast + fair ding repair
        </StyledHeader>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px', paddingBottom: '5%' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1499800683/guitar_stock2.jpg" alt="guitars" />
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
