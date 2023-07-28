import React, { useEffect, useState } from "react";
import App from "./App";
import "./root.component.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export default function Root(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const eventHandler = (event) => {
      console.log(event);
      setCount((prevCount) => prevCount + 1);
    };

    window.addEventListener("eventCustom", eventHandler);

    return () => {
      window.removeEventListener("eventCustom", eventHandler);
    };
  }, []);
  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <h2>
              <Link to="/#/">Thời trang nữ</Link>
            </h2>
          </li>
          <li>
            <h2>
              <a href="/#/page2">Thời trang nam</a>
            </h2>
          </li>
        </ul>
        <Route exact path="/" />
        <Route path="/#/page2" />
      </Router>
      <div className="mgrt">
        hiện đang có <b>{count}</b> sản phẩm trong giỏ hàng
      </div>
    </div>
  );
}
