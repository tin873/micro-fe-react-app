import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

// // export const { bootstrap, mount, unmount } = lifecycles;
// export const bootstrap = lifecycles;
// export const mount = (props) => {
//   const { domElementGetter } = props;
  
//   // Get the DOM element based on domElementGetter function
//   const domElement = domElementGetter();

  
//   // Mount the React component to the DOM element
//   ReactDOM.render(<Root />, domElement);
//   // Or, if you want to pass props to the component
//   // ReactDOM.render(<MyComponent {...props} />, domElement);
// };

// export const unmount = lifecycles;
// const customProps = {domElement: document.getElementById('react-container')}

// // You need to ensure that the System.import() or import() promise resolves with a valid parcel config object
// const parcel = mountParcel(lifecycles, customProps);
export const  bootstrap = lifecycles.bootstrap;
export const  mount = lifecycles.mount;
export const  unmount = lifecycles.unmount;

// Consider removing the custom mount implementation and use single-spa-react's mount function instead

const customProps = { domElement: document.getElementById('reactTest') };

lifecycles.mount(customProps);

// Export the parcel object if needed for future usage or unmounting
