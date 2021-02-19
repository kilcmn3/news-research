import React from 'react';
import { useParams } from 'react-router-dom';

const UserContainer = (props) => {
  let params = useParams();
  console.log(params.userName);
  return <div> UserContainer</div>;
};

export default UserContainer;
