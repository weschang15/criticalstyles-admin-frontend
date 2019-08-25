import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  FieldLabel,
  Fields,
  PrimaryButton,
  PrimaryModal,
  Spinner
} from "../../Elements";
import ModalImage from "../../images/create-page.svg";
import { CREATE_PAGE } from "../../Mutations";
import { ModalForm, ModalFormGroup, ModalHeader } from "./Modals";

const INITIAL_FIELDS = {
  name: "",
  url: ""
};

function AddPageModal({ on, toggle, location: { state = {} } }) {
  const { siteId } = state;
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createSite, { loading }] = useMutation(CREATE_PAGE);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createSite({
      variables: {
        input: { ...fields, siteId }
      }
    });

    if (data && data.createPage) {
      const {
        createPage: { ok, errors }
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
          <img src={ModalImage} alt="Modal for adding a new page" />
        </figure>
        <div>
          <h5>Create Page</h5>
          <p>
            We'll automatically get started on generating critical CSS for this
            page!
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
            <FieldLabel htmlFor="name">Page Name</FieldLabel>
            <Fields
              type="text"
              id="name"
              placeholder="Primary landing page"
              onChange={handleChange}
              value={fields.name}
              name="name"
              required
            />
            <FieldLabel htmlFor="name">Page URL</FieldLabel>
            <Fields
              type="text"
              id="url"
              placeholder="https://criticalstyles.com"
              onChange={handleChange}
              value={fields.url}
              name="url"
              required
            />
          </ModalFormGroup>
          <ModalFormGroup>
            <Fields type="submit">
              {loading ? <Spinner /> : "Create Page"}
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

export default withRouter(AddPageModal);
