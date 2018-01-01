/**
*
* Hero
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const Background = styled.div`
  width: 100%;
  background-color: #000000;
  padding: 5%;
  `;


function Hero() {
  return (
    <div>
      <video style={{ backgroundColor: 'black', zIndex: '1', width: '100%', float: 'left', top: '0', padding: 'none', paddingTop: '25%', paddingBottom: '10%' }}>
        <source src="http://res.cloudinary.com/kurzweg/video/upload/v1501652265/ding_delight.mov" />
        Your browser does not support the video tag.
      </video>
      <Background>
        <h1 style={{ fontSize: '32px', fontFamily: 'Lobster Two', fontWeight: 'bold', textAlign: 'center', color: '#2FF6CE', letterSpacing: '3px', marginBottom: '2%', marginTop: '2%' }}>fast & fair local ding repair</h1>
        <h3 style={{ fontSize: '18px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#FCBA3F', textTransform: 'uppercase', letterSpacing: '3px' }}>serving southern california</h3>
        <h3 style={{ fontSize: '18px', fontFamily: 'Josefin Sans', textAlign: 'center', color: '#EB453A', textTransform: 'uppercase', letterSpacing: '3px' }}>instant quote</h3>
      </Background>

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

