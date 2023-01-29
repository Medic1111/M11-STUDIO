import { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import PayConfirm from "../PayConfirm/PayConfirm";
import FormWrapper from "../../common/FormWrapper/FormWrapper";

const CheckoutFull = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <FormWrapper>
      {!showConfirm && <CheckoutForm setShowConfirm={setShowConfirm} />}
      {showConfirm && <PayConfirm setShowConfirm={setShowConfirm} />}
    </FormWrapper>
  );
};

export default CheckoutFull;
