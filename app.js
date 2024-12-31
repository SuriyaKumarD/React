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
    React.createElement("h1", { id: "heading" }, "Hello Suriya!!"),
    React.createElement("h2", { id: "heading" }, "Welcome to world of React!!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(parents);
