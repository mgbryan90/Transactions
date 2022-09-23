const BASE_URL = "https://expensable-api.herokuapp.com/";


export function getTransactions(id, transactions) {
  return fetch(`${BASE_URL}/categories/${id}/transactions/${transactions.id}`)
  .then(response => response.json());
}