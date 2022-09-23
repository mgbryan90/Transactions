import styled from "@emotion/styled";
import { useState } from "react";
import Input from "./Input";


const AmountInputs = styled.div`
  display: flex;
  gap: 1rem;
`;


function Amount({onSubmit}) {
  // const [ amountMin, setAmountMin] = useState("");
  // const [ amountMax, setAmountMax] = useState("");

  const [amount, setAmount] = useState({
    amountMin: "",
    amountMax: "",
  })

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    
    setAmount({
      ...amount, 
      [e.target.name]: e.target.value
    },);
  }

  

  return (
    <>
      <p>Amount</p>
      <AmountInputs>
        <Input
          type="number"
          name="amountMin"
          value={amount.amountMin}
          label="MIN"
          onChange={handleChange}
          isNumeric
        />
        <Input
          type="number"
          name="amountMax"
          value={amount.amountMax}
          label="MAX"
          onChange={handleChange}
          isNumeric
        />
      </AmountInputs>
    </>
  );
}

export default Amount;