const BASE_URL = "https://expensable-api.herokuapp.com/";
const API_KEY = "HAM9GaQ69bPrivGsY2WNVc3T";

export function getTransactions(id, transactions) {
  return fetch(`${BASE_URL}/categories/${id}/transactions/${transactions.id}&api_key=${API_KEY}`)
  .then(response => response.json());
}