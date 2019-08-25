import { useMutation } from "@apollo/react-hooks";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FieldLabel,
  Fields,
  PrimaryButton,
  PrimaryModal,
  Spinner
} from "../../Elements";
import ModalImage from "../../images/add-user.svg";
import { ADD_ACCOUNT_USER } from "../../Mutations";
import { ModalForm, ModalFormGroup, ModalHeader } from "./Modals";

const INITIAL_FIELDS = {
  email: ""
};

function AddUserModal({ on, toggle }) {
  const { accountId } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [addUser, { loading }] = useMutation(ADD_ACCOUNT_USER);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await addUser({
      variables: {
        input: { ...fields, accountId }
      }
    });

    if (data && data.addUser) {
      const {
        addUser: { ok, errors }
      } = data;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      toggle();
    }
  };

  const cancel = e => {
    e.preventDefault();
    setFields(INITIAL_FIELDS);
    toggle();
  };

  return (
    <PrimaryModal toggle={toggle} on={on}>
      <ModalHeader>
        <figure>
          <img src={ModalImage} alt="Modal for adding a new user" />
        </figure>
        <div>
          <h5>Invite user</h5>
          <p>
            Send a user invite to allow access to all of your workspace's Sites,
            Pages, and Critical CSS
          </p>
        </div>
      </ModalHeader>
      <>
        {errors.length > 0 && (
          <ul>
            {errors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        )}
        <ModalForm onSubmit={handleSubmit}>
          <ModalFormGroup>
            <FieldLabel htmlFor="email">User Email</FieldLabel>
            <Fields
              type="email"
              id="email"
              placeholder="jane@doe.com"
              onChange={handleChange}
              value={fields.email}
              name="email"
              required
            />
          </ModalFormGroup>
          <ModalFormGroup>
            <Fields type="submit">
              {loading ? <Spinner /> : "Invite user"}
            </Fields>
            <PrimaryButton onClick={cancel} bgColor="gray">
              Cancel
            </PrimaryButton>
          </ModalFormGroup>
        </ModalForm>
      </>
    </PrimaryModal>
  );
}

export default AddUserModal;
