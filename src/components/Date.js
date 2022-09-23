import styled from "@emotion/styled";
import Input from "./Input";

const DatesInputs = styled.div`
  display: flex;
  gap: 1rem;
`;

function Dates() {
  return (
    <>
      <p>Date</p>
      <DatesInputs>
      <Input type="date" name="date" label= "FROM" />
      <Input type="date" name="date" label= "TO"/>
      </DatesInputs>
    </>
  )
}

export default Dates;