/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const A = styled.a`
  font-family: 'Roboto';
  color: #108EE9;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 2px;
  &:hover {
    color: #7C4DFF;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <p style={{ fontSize: '12px', color: '#FAFAFA', textAlign: 'center', letterSpacing: '1.5px', padding: '2%' }}>Copyright 2017 ABSL &nbsp; &nbsp; Website by <A href="http://www.vk.digital" target="blank">vk.digital</A></p>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
