import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export function Footer() {
  return (
    <div className="footer">
      <Row justify="center">
        <Col span={8}>
          <div>
            <img src="./logo.png" alt="logo" className="col-1" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Col>
        <Col span={3} className="col-2">
          <div>
            <h2>Information</h2>
            <Link to="information">Team & Conditions</Link>
            <br />
            <Link to="information">Privacy Policy</Link>
          </div>
        </Col>
        <Col span={3} className="col-2">
          <div>
            <h2>Information</h2>
            <Link to="information">Team & Conditions</Link>
            <br />
            <Link to="information">Privacy Policy</Link>
          </div>
        </Col>
        <Col span={3} className="col-2">
          <div>
            <h2>Information</h2>
            <Link to="information">Team & Conditions</Link>
            <br />
            <Link to="information">Privacy Policy</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
