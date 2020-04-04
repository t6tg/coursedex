import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import "./style.css";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <nav className="menuBar">
          <div className="logo">
            <Link to="/">
              <img src={"./logo.png"} alt="logo" />
            </Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            {/* <div className="rightMenu">
              <RightMenu />
            </div> */}
            <Button
              className="barsMenu"
              type="primary"
              onClick={this.showDrawer}
            >
              <span>
                <MenuOutlined style={{ fontSize: "16px", color: "#fff" }} />
              </span>
            </Button>
            <Drawer
              title="RedXAV"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              {/* <RightMenu /> */}
            </Drawer>
          </div>
        </nav>
      </div>
    );
  }
}
export { Navbar };
