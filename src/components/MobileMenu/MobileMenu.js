/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';



const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close"/>
          <VisuallyHidden>
          Dismiss menu</VisuallyHidden>
          </CloseButton>
        <Spacer />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
;
`

const Content = styled(DialogContent)`
  background-color: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`;

export default MobileMenu;
