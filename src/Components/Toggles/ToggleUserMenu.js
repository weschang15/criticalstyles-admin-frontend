import { darken, transparentize } from "polished";
import React, { useContext } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { Icons, Toggle } from "../../Elements";

const User = styled.button`
  background: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: inline-block;
  margin-left: 1em;
  outline: none;
  padding: 5px;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.blue};
    display: block;
  }

  &:focus,
  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.blue};
  }

  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
  }

  &:active {
    transform: perspective(1px) scale3d(0.95, 0.95, 0.95);
  }
`;

const Nav = styled.nav`
  background-color: #fff;
  border: 1px solid ${({ theme }) => transparentize(0.75, theme.gray)};
  border-radius: 6px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
`;

const List = styled.ul`
  list-style: none;
  margin: 5px 0;
  padding: 0;
  &:not(:only-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;

const Item = styled.li`
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  padding: 0.5em;
  &:hover {
    background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
    color: ${({ theme }) => theme.blue};
  }
`;

const Section = styled.section`
  padding: 10px;
  p {
    color: ${({ theme }) => darken(0.25, theme.gray)};
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
`;

const ProfileSection = styled(Section)`
  background-color: ${({ theme }) => transparentize(0.75, theme.gray)};
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  p {
    color: ${({ theme }) => darken(0.5, theme.gray)};
  }
`;

const AnimatedNav = animated(Nav);

function UserMenu({ on, user: { firstName, lastName, accounts } }) {
  const transitions = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -10px, 0)" }
  });

  return transitions.map(
    ({ item, key, props: animation }) =>
      item && (
        <AnimatedNav key={key} style={animation}>
          <ProfileSection>
            <p>{`${firstName} ${lastName}`}</p>
          </ProfileSection>
          <Section>
            <p>Accounts</p>
            <List>
              {accounts.map(({ _id, name }) => (
                <Item key={_id}>{name}</Item>
              ))}
            </List>
          </Section>
        </AnimatedNav>
      )
  );
}

function ToggleUserMenu() {
  const { user } = useContext(AuthContext);
  return (
    <Toggle>
      {({ on, toggle }) => (
        <>
          <UserMenu on={on} user={user} />
          <User onClick={toggle}>
            <Icons icon="user" size={30} />
          </User>
        </>
      )}
    </Toggle>
  );
}

export default ToggleUserMenu;
