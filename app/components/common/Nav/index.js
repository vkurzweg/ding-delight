/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import { browserHistory } from 'react-router';
import { Image } from 'cloudinary-react';

const StyledAppBar = styled(AppBar)`
  width: 100%;
  background: -moz-linear-gradient(45deg, rgba(227,127,245,1) 0%, rgba(227,127,245,1) 1%, rgba(156,39,176,1) 99%, rgba(156,39,176,1) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(227,127,245,1)), color-stop(1%, rgba(227,127,245,1)), color-stop(99%, rgba(156,39,176,1)), color-stop(100%, rgba(156,39,176,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(45deg, rgba(227,127,245,1) 0%, rgba(227,127,245,1) 1%, rgba(156,39,176,1) 99%, rgba(156,39,176,1) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(45deg, rgba(227,127,245,1) 0%, rgba(227,127,245,1) 1%, rgba(156,39,176,1) 99%, rgba(156,39,176,1) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(45deg, rgba(227,127,245,1) 0%, rgba(227,127,245,1) 1%, rgba(156,39,176,1) 99%, rgba(156,39,176,1) 100%); /* ie10+ */
  `;

const A = styled.a`
  font-size: 26px;
  letter-spacing: 2px;
  color: #000000;

  &:hover {
    color: #FCBA3F;
    text-decoration: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: #F5F5F5;
  background-color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 2%;
  color: #F5F5F5;

  &:hover {
    color: #24A5DA;
  }
`;

const items = [
  {
    name: 'Aloha Brothers Home',
    url: 'http://www.alohabrothers.surf',
  }
];

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
  }
};

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose(url) {
    this.setState({ open: false });
    browserHistory.push(url);
  }

  render() {
    const brand = <div style={{ display: 'inline-flex' }}>
                    <A href="/" style={{ color: '#2FF6CE', fontFamily: 'Lobster Two', textDecoration: 'none' }}>ding delight</A>&nbsp;&nbsp;
                    <A href="http://www.alohabrothers.surf" target="blank" style={{ fontFamily: 'Lobster', fontSize: '22px' }}>by Aloha Brothers</A>
                  </div>;

    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none' }}
            showMenuIconButton={false}
          />
          <Drawer
            docked={false}
            width={300}
            openSecondary
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
            containerStyle={style.bg}
          >
            <div style={{ paddingTop: '25%' }}>
            {items.map((item, idx) => {
              return (
                <StyledMenuItem key={idx} onTouchTap={this.handleClose.bind(null, item.url)} style={{ color: '#F5F5F5', backgroundColor: '#000000', textTransform: 'uppercase', letterSpacing: '2px', padding: '2%' }}>{item.name}</StyledMenuItem>
              );
            })}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
