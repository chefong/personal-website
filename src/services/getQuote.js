import axios from 'axios';

export default function getQuote() {
  return axios.get('https://api.quotable.io/random');
}