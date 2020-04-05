import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="signup">
            <Link to="/signup">สมัครสมาชิก</Link>
          </Menu.Item>
          <Menu.Item key="signin">
            <Link to="/signin">เข้าสู่ระบบ</Link>
          </Menu.Item>
        </Menu>
        <Menu mode="inline" className="mobile-menu">
          <Menu.Item key="signup">
            <Link to="/signup">สมัครสมาชิก</Link>
          </Menu.Item>
          <Menu.Item key="signin">
            <Link to="/signin">เข้าสู่ระบบ</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default LeftMenu;
