import React from 'react';
import uuid from "uuid";

class SessionIdGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.getTimestamp=this.getTimestamp.bind(this);
    this.getUuid=this.getUuid.bind(this);
  }

  static getTimestamp(){
    var date = new Date()
    var timestamp = date.getTime();
    return (timestamp);

  }

  static getUuid(){
    return(uuid.v4());
  }
}
export default SessionIdGenerator;