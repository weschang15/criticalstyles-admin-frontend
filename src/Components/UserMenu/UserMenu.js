import { darken, transparentize } from "polished";
import React from "react";
import { useMutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { SWITCH_ACCOUNT } from "../../Mutations";

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
  margin: 5px 0;
  padding: 0.5em;
  position: relative;
  &.active {
    border-radius: 0;
    padding-left: 15px;
    pointer-events: none;

    &:before {
      background-color: ${({ theme }) => theme.blue};
      border-radius: 50%;
      content: "";
      display: block;
      height: 5px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: 5px;
    }
  }
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

function UserMenu({
  on,
  user: { firstName, lastName, accounts },
  currentAccount,
  history,
  location: { pathname }
}) {
  const [switchAccount] = useMutation(SWITCH_ACCOUNT);

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
                <Item
                  key={_id}
                  className={currentAccount._id === _id && "active"}
                  onClick={() => {
                    switchAccount({
                      variables: {
                        input: {
                          accountId: _id
                        }
                      },
                      refetchQueries: ["Auth", "GetAccount", "GetSites"]
                    });

                    if (pathname !== "/") {
                      history.push("/");
                    }
                  }}
                >
                  {name}
                </Item>
              ))}
            </List>
          </Section>
        </AnimatedNav>
      )
  );
}

export default withRouter(UserMenu);
