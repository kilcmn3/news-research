/**
 *TODO:
 *-[]Imply style on <div> tag
 **/

import React from 'react';
import { useParams } from 'react-router-dom';

const UserContainer = (props) => {
  let params = useParams();

  return (
    <center>
      {/* style = style="margin-top:2px; margin-bottom:-10px;" */}
      <table id='hnmain'></table>
    </center>
  );
};

export default UserContainer;
