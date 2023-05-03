import React from "react";
import ReactDOM from "react-dom/client";


const title = React.createElement("h1", { id: "title", key: "h1" }, "Namaste react");

// const heading2 = (<h2 id="heading2" key="h2">Heading 2</h2>)

// const container = React.createElement("div", { id: "container" }, [heading1, heading2])

const HeaderComponent = () => {
    return (
        <div>
            {title}
            <h2>Namaste React Functional component</h2>
            <h2>This is a h2 tag</h2>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)
