import Axios from 'axios';

export function fetchListStore() {
  return Axios({
    method: 'GET',
    url: 'http://localhost:5000/stores',
  });
}
