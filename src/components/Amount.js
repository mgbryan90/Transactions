import styled from "@emotion/styled";
import Input from "./Input";


const AmountInputs = styled.div`
  display: flex;
  gap: 1rem;
`;


function Amount() {
  return (
    <>
      <p>Amount</p>
      <AmountInputs>
      <Input type="text" name="amount" label= "MIN" />
      <Input type="text" name="amount" label= "MAX"/>
      </AmountInputs>
    </>
  )
}

export default Amount;