// Higher-order Component: A compponent (HOC) that renders another component.
// Enables code-reuse, render-hijacking, prop-manipulation, & abstract-state.
console.log('hoc.js is running.');

import React from 'react';
import ReactDOM from 'react-dom';

// Stateless, functional component
const Info = (props) => (
  <div>
    <h1>Info Component</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
  // return a higher-order component wrapping WrappedComponent.
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.  Do NOT share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

// Another HOC generator
const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.authenticated ?
        <p>Please log in to access secure resources.</p> :
        <WrappedComponent {...props} />
      }
    </div>
  );
};
const AuthInfo = requireAuth(Info);

ReactDOM.render(
  <AuthInfo
    authenticated={true}
    isAdmin={true}
    info="Sound travels about 13.5 inches/millisecond."
  />,
  document.getElementById('app')
);
