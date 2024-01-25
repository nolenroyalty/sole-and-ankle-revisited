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
      <OverlayWrapper isOpen={isOpen} onClose={onDismiss}>
        <ContentWrapper aria-label="menu">
          <Dull />
          <SidebarWrapper>
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
          </SidebarWrapper>
        </ContentWrapper>
      </OverlayWrapper>
    </>
  );
};

const ButtonWrapper = styled(UnstyledButton)`
  align-self: flex-end;
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
  align-items: flex-start;
  gap: 6px;
`;

const FooterLink = styled.footer`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
`;

const StackingContext = styled.div``;

const Dull = styled.div`
  background: ${COLORS.transparentGray};
  flex: 1;
  width: 100%;
  align-self: stretch;
`;

const OverlayWrapper = styled(DialogOverlay)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
`;

const ContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default MobileMenu;
