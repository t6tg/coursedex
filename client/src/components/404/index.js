import React, { Component } from "react";
import IMG_404 from "../../assets/notfound.png";
import { Button } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
export class ERROR_404 extends Component {
  render() {
    return (
      <div>
        <center>
          <img src={IMG_404} id="img-404" alt="notfound" />
          <h1>404 Page Not Found</h1>
          <h2>ไม่พบหน้าที่ท่านต้องการทำรายการ</h2>
          <Link to="/">
            <Button
              id="link-to-home"
              type="primary"
              shape="round"
              size={"large"}
            >
              กลับสู่หน้าหลัก
            </Button>
          </Link>
        </center>
      </div>
    );
  }
}
