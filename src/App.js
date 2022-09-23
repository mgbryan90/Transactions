
import styled from '@emotion/styled';
import './App.css';
import Amount from './components/Amount';
import Category from './components/Category';
import Dates from './components/Date';



const Container = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


function App() {
  return (
    <Container>
      <h2>Transactions</h2>
      <Category />
      <Amount />
      <Dates />

    </Container>
  );
}

export default App;
