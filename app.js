import React from "react";
import {createRoot} from "react-dom/client"



const root = createRoot(document.getElementById("main"));
const heading = React.createElement(
    "h1",
    {
        key: "heading",   // ✅ unique key
        style: {
            color: "white",
            textAlign: "center",
            textDecoration: "wavy underline yellowgreen",
            textUnderlineOffset: "8px",
            textTransform:"capitalize"
        },
    },
    "Hello from Namaste React❤️"
);

const parentDiv = React.createElement(
    "div",
    {
        key: "parentDiv",   // ✅ unique key
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
                key: "childDiv1",   // ✅ unique key
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
                        key: "childDiv2",   // ✅ unique key
                        className: "childDiv2",
                        style: {
                            width: "90px",
                            height: "90px",
                            backgroundColor: "#0D1164",
                        },
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