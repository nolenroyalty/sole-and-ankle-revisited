import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeaderWrapper>
        <SuperHeader />
      </SuperHeaderWrapper>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side>
          <MobileMenuWrapper>
            <Icon id="shopping-bag" size={24} strokeWidth={2} />
            <Icon id="search" size={24} strokeWidth={2} />
            <Button onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" size={24} strokeWidth={2} />
            </Button>
          </MobileMenuWrapper>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  padding: 0;
`;

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    gap: 16px;
    display: flex;
    align-items: center;
  }
`;

const SuperHeaderWrapper = styled.div`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  /* justify-content: flex-end; */
  /* justify-content: space-between; */

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    padding: 18px 16px;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
