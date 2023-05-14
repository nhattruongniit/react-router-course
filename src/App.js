import React from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import InvoiceDetail from "./pages/InvoiceDetail";

function App() {
  const navigate = useNavigate();

  function handleTestNavigate() {
    navigate("/home", { replace: true });
  }
 

  return (
    <div className="App">
      <h1>Bookkeeper</h1>

      <div style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <nav>
          {/* <Link to="/home" replace>Home</Link> |  */}
          <NavLink 
            to="/home"
            className={value =>
              "nav-link-" + (!value.isActive ? "unselected" : "selected")
            }
          >
            Home
          </NavLink> | 
         
          <Link to="/contact">Contact</Link> |
          <Link to="/invoice">Invoice</Link>
        </nav>

        <br />

        <button type="button" onClick={handleTestNavigate}>
          Test navigate home
        </button>
      </div>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="invoice" element={<Invoice />}>
          <Route index element={<div>Select an invoice</div>} />
          <Route path=":invoiceId" element={<InvoiceDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
