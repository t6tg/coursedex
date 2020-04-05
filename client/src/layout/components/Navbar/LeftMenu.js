import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="onlinecourse">
            <Link to="/course">คอร์สออนไลน์</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="/blog">บทความ</Link>
          </Menu.Item>
        </Menu>
        <Menu mode="inline" className="mobile-menu">
          <Menu.Item key="onlinecourse">
            <Link to="/course">คอร์สออนไลน์</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="/blog">บทความ</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default RightMenu;
