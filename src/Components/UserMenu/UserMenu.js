import React from "react";
import { useMutation } from "react-apollo";
import { useHistory, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Dropdown } from "../../Elements";
import { SWITCH_ACCOUNT } from "../../Mutations";

const AnimatedNav = animated(Dropdown.Dropdown);

function UserMenu({
  on,
  user: { firstName, lastName, accounts },
  currentAccount,
}) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [switchAccount] = useMutation(SWITCH_ACCOUNT);
  const transitions = useTransition(on, null, Dropdown.animation);

  return transitions.map(
    ({ item, key, props: animation }) =>
      item && (
        <AnimatedNav key={key} style={animation}>
          <Dropdown.ProfileSection>
            <p>{`${firstName} ${lastName}`}</p>
          </Dropdown.ProfileSection>
          <Dropdown.Section>
            <p>Switch to account</p>
            <Dropdown.DropdownList>
              {accounts.map(({ _id, name }) => (
                <Dropdown.DropdownListItem
                  key={_id}
                  className={currentAccount._id === _id && "active"}
                  onClick={() => {
                    switchAccount({
                      variables: {
                        input: {
                          accountId: _id,
                        },
                      },
                      refetchQueries: [
                        "Auth",
                        "GetAccount",
                        "GetSites",
                        "GetTokens",
                      ],
                    });

                    if (pathname !== "/") {
                      history.push("/");
                    }
                  }}
                >
                  {name}
                </Dropdown.DropdownListItem>
              ))}
            </Dropdown.DropdownList>
          </Dropdown.Section>
        </AnimatedNav>
      )
  );
}

export default UserMenu;
