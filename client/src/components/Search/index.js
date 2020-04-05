import React from "react";
import { Row, Col, Input, Layout } from "antd";
import VECTOR from "../../assets/search.png";
import "./style.css";
const { Search } = Input;

export function SearchInput() {
  return (
    <div>
      <Layout>
        <Row justify="center" style={{ padding: "40px" }}>
          <Col span={16} style={{ textAlign: "center" }}>
            <img className="vector-search" src={VECTOR} alt="vector" />
            <h2>
              <b>ค้นหาคอร์สที่น่าสนใจ</b>
            </h2>
            <Search
              placeholder="ค้นหาคอร์สที่คุณสนใจ....!!"
              enterButton
              size="large"
              onSearch={(value) => console.log(value)}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
