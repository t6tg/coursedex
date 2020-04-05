import React from "react";
import Box from "./Box";
import { Row, Col } from "antd";
import bussiness from "../../assets/bussiness.png";
import general from "../../assets/general.png";
import technology from "../../assets/technology.png";
import design from "../../assets/design.png";
export function MainCategories() {
  return (
    <div>
      <center>
        <Row justify="center">
          <Col>
            <Box icon={general} title="GENERAL" link="general" />
          </Col>
          <Col>
            <Box icon={technology} title="TECHNOLOGY" link="technology" />
          </Col>
          <Col>
            <Box icon={design} title="DESIGN" link="design" />
          </Col>
          <Col>
            <Box icon={bussiness} title="BUSSINESS" link="bussiness" />
          </Col>
        </Row>
      </center>
    </div>
  );
}
