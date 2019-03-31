import React from "react";
import ReactDOM from "react-dom";

// Own Imports
import IndecisionApp from "./components/IndecisionApp";

// CSS Imports
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// const Layout = props => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// );

// ReactDOM.render(
//   <Layout>
//     <p>{template}</p>
//   </Layout>,
//   document.getElementById("app")
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
