import React from 'react';
import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  axios.get('/api/users/currentuser')
  return <div>Landing Page</div>;
};

LandingPage.getInitialProps = async () => {
  const response = await axios.get('/api/users/currentuser');
  console.log('I am on the server!');
  console.log(response);

  return response.data;
};

export default LandingPage;
