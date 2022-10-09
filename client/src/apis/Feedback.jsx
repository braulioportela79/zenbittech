import axios from 'axios';

export default axios.create({
  baseURL: 'https://feedback-zenbittech.herokuapp.com/feedback',
});
