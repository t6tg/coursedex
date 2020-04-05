import React from "react";
import { Navbar, Footer } from "./components";
export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
