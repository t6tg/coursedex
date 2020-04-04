import React from "react";
import { Navbar, Footer } from "./components";
import { Layout } from "antd";
export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <Layout>{props.children}</Layout>
      <Footer />
    </div>
  );
}
