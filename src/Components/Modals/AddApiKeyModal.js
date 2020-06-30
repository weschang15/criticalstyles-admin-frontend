import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import ModalImage from "../../assets/create-site.svg";
import {
  FieldLabel,
  Fields,
  PrimaryButton,
  PrimaryModal,
  Spinner,
} from "../../Elements";
import { CREATE_TOKEN } from "../../Mutations";
import Copier from "../Copier/Copier";
import { ModalForm, ModalFormGroup, ModalHeader } from "./Modals";

function AddApiKeyModal({ on, toggle }) {
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState([]);
  const [createToken, { loading }] = useMutation(CREATE_TOKEN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createToken({
      refetchQueries: ["GetTokens"],
    });

    if (data && data.createToken) {
      const {
        createToken: { ok, errors, token },
      } = data;
      if (!ok) {
        return setErrors(errors);
      }

      setToken(token.secret);
    }
  };

  const cancel = (e) => {
    e && e.preventDefault();
    setToken(null);
    toggle();
  };

  return (
    <PrimaryModal toggle={cancel} on={on}>
      <ModalHeader>
        <figure>
          <img src={ModalImage} alt="Modal for adding a new API key" />
        </figure>
        <div>
          <h5>Add API Key</h5>
          <p>
            Generate a new API key that you can use to authenticate API requests
            from other applications.
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
            {token && (
              <>
                <FieldLabel htmlFor="token">API Key</FieldLabel>
                <Fields
                  type="text"
                  value={token}
                  name="token"
                  readOnly
                  disabled
                />
              </>
            )}
          </ModalFormGroup>
          <ModalFormGroup>
            {token ? (
              <Copier copyText={token} />
            ) : (
              <>
                <Fields type="submit">
                  {loading ? <Spinner /> : "Add API key"}
                </Fields>
                <PrimaryButton onClick={cancel} bgColor="gray">
                  Cancel
                </PrimaryButton>
              </>
            )}
          </ModalFormGroup>
        </ModalForm>
      </>
    </PrimaryModal>
  );
}

export default AddApiKeyModal;
