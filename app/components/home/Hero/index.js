/**
*
* Hero
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const StyledHeader = styled.h1`
  color: #F5F5F5;
  font-family: 'Monoton';
  text-align: center;
  padding-top: 15%;
  font-size: 72px;
  font-weight: normal;
`;

const StyledBtn1 = styled.button`
  width: 100%;
  text-align: center;
  font-family: 'Monoton';
  background-color: #FC527F;
  border: none;
  height: 3em;
`;

function Hero() {
  return (
    <div>
      <div style={{ zIndex: '10', dispay: 'block', margin: '0 auto', width: '100%', position: 'absolute', marginTop: '35%' }}>
        <h1 style={{ fontSize: '52px', fontFamily: 'Lobster Two', textAlign: 'center', color: '#2FF6CE', letterSpacing: '3px', marginBottom: '2%' }}>fast & fair local ding repair</h1>
        <h3 style={{ fontSize: '28px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#E17CF3', textTransform: 'uppercase', letterSpacing: '3px' }}>serving southern california</h3>
        <h3 style={{ fontSize: '28px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#E17CF3', textTransform: 'uppercase', letterSpacing: '3px' }}>same-day quote</h3>
      </div>
      <video style={{ backgroundColor: 'black', zIndex: '1', height: '20%', width: '100%', float: 'left', top: '0', padding: 'none' }} loop autoPlay>
        <source src="http://res.cloudinary.com/kurzweg/video/upload/v1501622800/wipeout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
}

Hero.propTypes = {

};

export default Hero;

// <StyledHeader>
//   Learn to Play in L.A.
// </StyledHeader>


// <span style={{ color: '#FF5349' }}>L</span>ea<span style={{ color: '#FC527F' }}>r</span>n t<span style={{ color: '#24A5DA' }}>o</span> Pl<span style={{ color: '#FF5349' }}>a</span>y i<span style={{ color: '#FC527F' }}>n</span> L.A.</span>

// <h3 style={{ color: '#F5F5F5', textAlign: 'center', fontSize: '36px', fontFamily: 'Josefin Sans', textTransform: 'uppercase' }}>Lessons from $69</h3>


// <Image cloudName="kurzweg" publicId="ding_fullsize" responsive quality="auto" style={{ width: '40%', display: 'block', margin: '0 auto', marginTop: '5%' }} />

