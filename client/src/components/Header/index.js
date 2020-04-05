import React, { Component } from "react";
import { Row, Col } from "antd";
import Mock from "../../assets/mockup.png";
import "./style.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <Row id="row-header">
          <Col id="col-1-head" span={12}>
            <img alt="mock-mobile" id="mock-mobile" src={Mock} />
            <br />
            <span className="left-head">
              <h1 id="header-content">Coursedex</h1>
              <span id="source-of-online">
                Source of online courses and workshop
              </span>
            </span>
            <div id="hr-header"></div>
          </Col>
          <Col id="col-2-head" span={12}>
            <img alt="mock" id="mock" src={Mock} />
          </Col>
        </Row>
      </div>
    );
  }
}
