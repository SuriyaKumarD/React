import React from "react";
import ReactDOM from "react-dom/client";

/*******************************************************************************
 *
 *
 * <div id=parent>
 * <div id="child">
 * <h1>Hello <h1>
 * </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello Suriya!!")
  )
);

/*************************************
 * <div id=parent>
 * <div id="child">
 * <h1>Hello <h1>
 * <h2> Hello Mr <h2>
 * </div>
 * </div>
 *
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello From React App Mr.Suriya!!"
// );

const parents = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello Suriya🚀, Happy New Year 2025!!"
    ),
    React.createElement("h2", { id: "heading" }, "Welcome to world of React!!"),
  ])
);
const jsxValue = <h1 id="heading">Hello Suriya🚀 Welcome to JSX World!!!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root1"));

//functional React Component

const Title = () => (
  <div id="heading">
    <h1> Hello Suriya, Welcome to JSX , Functional World!!!😚</h1>
  </div>
);
const Heading = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Im Hopefull of Completing Namaste React 🚀</h1>
  </div>
);

root.render(<Heading />);
