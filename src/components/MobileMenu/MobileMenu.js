/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, NavLink } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <OverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
        <ContentWrapper aria-label="menu">
          <ButtonWrapper onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </ButtonWrapper>
          <NavLinks>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </NavLinks>
          <FooterLinks>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </FooterLinks>
        </ContentWrapper>
      </OverlayWrapper>
    </>
  );
};

const ButtonWrapper = styled(UnstyledButton)`
  align-self: flex-end;
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 26px 32px;
  width: 300px;
  background: ${COLORS.white};

  justify-content: space-between;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 16px; // this doesn't feel right?
`;

const FooterLinks = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-end;
  gap: 6px;
  flex: 1;
`;

const FooterLink = styled.footer`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
`;

const OverlayWrapper = styled(DialogOverlay)`
  background: hsl(220 5% 40% / 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
`;

const ContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding: 16px 26px 32px;
  width: 300px;
  background: ${COLORS.white};

  justify-content: space-between;
`;

export default MobileMenu;
