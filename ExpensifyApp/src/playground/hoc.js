import React from 'react';
import ReactDOM from "react-dom";

const Info = (param) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {param.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requiresAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info.</p>
      {props.isAuthed ? <WrappedComponent {...props} /> : <p>Please log in.</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiresAuth(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="stuff" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthed={true} info="O_O" />, document.getElementById('app'));