import React from "react";
import { withRouter } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Dropdown } from "../../Elements";

const AnimatedNav = animated(Dropdown.Dropdown);

function NotificationMenu({ on, ...rest }) {
  const transitions = useTransition(on, null, Dropdown.animation);
  const notifications = [];

  return transitions.map(
    ({ item, key, props: animation }) =>
      item && (
        <AnimatedNav key={key} style={animation} {...rest}>
          <Dropdown.Section>
            <p>Notifications</p>
            <Dropdown.DropdownList>
              {notifications.map(({ _id, message }) => (
                <Dropdown.DropdownListItem key={_id} onClick={() => {}}>
                  {message}
                </Dropdown.DropdownListItem>
              ))}
            </Dropdown.DropdownList>
          </Dropdown.Section>
        </AnimatedNav>
      )
  );
}

export default withRouter(NotificationMenu);
