const root = ReactDOM.createRoot(document.getElementById("main"));
const heading = React.createElement(
  "h1",
  {
    style: {
      color: "white",
      textAlign: "center",
      textDecoration: "wavy underline yellowgreen",
      textUnderlineOffset: "8px",
    },
  },
  "Hello form namaste react"
);

const parentDiv = React.createElement(
  "div",
  {
    id: "parentDiv",
    style: {
      width: "max-content",
      height: "max-content",
      padding: "10px",
      backgroundColor: "#8AA624",
      margin: "0 auto",
    },
  },
  [
    React.createElement(
      "div",
      {
        className: "childDiv1",
        style: {
          width: "100px",
          height: "100px",
          padding: "5px",
          backgroundColor: "#E62727",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      [
        React.createElement(
          "div",
          {
            className: "childDiv2",
            style: { width: "90px", height: "90px", backgroundColor: "#0D1164" },
          },
          []
        ),
      ]
    ),
  ]
);

const container = React.createElement("div", { className: "container" }, [
  heading,
  parentDiv,
]);
root.render(container);
