import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
export const App = () => {
    const [count, setCount] = useState(0);
    return (_jsxs("div", { className: "container", children: [_jsx("h1", { children: count }), _jsx("button", { onClick: () => setCount((count) => count + 1), children: "Count" })] }));
};
