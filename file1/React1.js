
const heading = React.createElement("h1",{className: "my-heading",style: { color: "blue" },id: "main-heading"},"Hello World from react");
const  root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);
console.log(typeof(heading));
console.log(root);
console.log(typeof(root));

// /nested tags/dom
const parent = React.createElement("div",{id : "parent"},
    [   React.createElement("div",{id : "child1"},
        [React.createElement("h1",{},"i am an h1 tag"),
        Rea.createElement("h2",{},"i am an h2 tag")]
    ),
        React.createElement("div",{id : "child1"},
            [React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"i am an h2 tag")]
    )]
);
root.render(parent);

