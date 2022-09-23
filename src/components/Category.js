import styled from "@emotion/styled";
import Checkbox from './Checkbox';

const ChecksCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

function Category() {
  return (
    <>
      <p>Category</p>
      <ChecksCategory>
        <Checkbox name="Rent"/>
        <Checkbox name="Salary"/>
        <Checkbox name="Transport"/>
        <Checkbox name="Education"/>
        <Checkbox name="Groceries"/>
        <Checkbox name="Gifts"/>
      </ChecksCategory>
    </>
  )
}

export default Category;