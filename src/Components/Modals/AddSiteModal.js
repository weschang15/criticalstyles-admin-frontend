import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import ModalImage from "../../assets/create-site.svg";
import {
  FieldLabel,
  Fields,
  PrimaryButton,
  PrimaryModal,
  Spinner
} from "../../Elements";
import { CREATE_SITE } from "../../Mutations";
import { ModalForm, ModalFormGroup, ModalHeader } from "./Modals";

const INITIAL_FIELDS = {
  name: ""
};

function AddSiteModal({ on, toggle }) {
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createSite, { loading }] = useMutation(CREATE_SITE);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createSite({
      variables: {
        input: { ...fields }
      }
    });

    if (data && data.createSite) {
      const {
        createSite: { ok, errors }
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
          <img src={ModalImage} alt="Modal for adding a new site" />
        </figure>
        <div>
          <h5>Create Site</h5>
          <p>
            Your sites allow you to organize all of your generated critical CSS
            files
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
            <FieldLabel htmlFor="name">Site Name</FieldLabel>
            <Fields
              type="text"
              id="name"
              placeholder="Corporate website"
              onChange={handleChange}
              value={fields.name}
              name="name"
              required
            />
          </ModalFormGroup>
          <ModalFormGroup>
            <Fields type="submit">
              {loading ? <Spinner /> : "Create Site"}
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

export default AddSiteModal;
