import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { SearchInput } from "../../components";
const { Meta } = Card;

const Skeleton = () => {
  return (
    <Col style={{ padding: "10px" }}>
      <Card style={{ width: 300, marginTop: 16 }} loading={true}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
  );
};
export default function SkeletonCategories() {
  return (
    <div>
      <SearchInput />
      <Row justify="center">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Row>
    </div>
  );
}
