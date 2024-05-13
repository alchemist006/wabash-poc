import axios from 'axios';
import { MOCK_SERVER_URL } from './constants';

export default axios.create({
  baseURL: MOCK_SERVER_URL,
});
