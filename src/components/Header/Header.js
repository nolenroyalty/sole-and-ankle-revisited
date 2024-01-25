import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES, NavLink } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

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
            <UnstyledButton>
              <Icon id="shopping-bag" size={24} strokeWidth={2} />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" size={24} strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" size={24} strokeWidth={2} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
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

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    gap: 32px;
    display: flex;
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
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
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-700);
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }

  overflow-x: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.5rem, 10vw - 2rem, 3rem); // 48px;
  gap: clamp(1rem, 7.8vw - 2rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

export default Header;
