import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertComponent = (props) => {
  return (
    <div>
      <Alert className="alert alert-danger">
        This is a danger alert—check it out! {props.alert}
      </Alert>
    </div>
  );
};

export default AlertComponent;
