import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Mock from "../../assets/mockup.png";
import "./style.css";
const { Content } = Layout;

export class Header extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col-1-head" span={12}>
            <h1 className="header-content">Coursedemy</h1>
            <span class="source-of-online">
              Source of online courses and workshop
            </span>
          </Col>
          <Col className="col-2-head" span={12}>
            <img alt="mock" className="mock" src={Mock} />
          </Col>
        </Row>
      </div>
    );
  }
}
