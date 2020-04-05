import React from "react";
import { Row, Col, Input } from "antd";
const { Search } = Input;
export function SearchInput() {
  return (
    <div>
      <Row justify="center" style={{ padding: "20px" }}>
        <Col span={16}>
          <Search
            placeholder="ค้นหาคอร์สที่คุณสนใจ....!!"
            enterButton="ค้นหา"
            size="large"
            onSearch={(value) => console.log(value)}
          />
        </Col>
      </Row>
    </div>
  );
}
