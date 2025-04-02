import React, { useState } from "react";
import {
  HomeOutlined,
  FileOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Navbar from "./Navbar";
import ShellFooter from "./Footer";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("My Jobs", "2", <FileOutlined />),
  getItem("Chats", "3", <MessageOutlined />),
  getItem("Notifications", "4", <BellOutlined />),
  getItem("Settings", "5", <SettingOutlined />),
];

const ShellLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sider
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: "white",
            borderRight: "1px solid #f0f0f0",
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ background: "#f5f7fa" }}>
          <Content>
            <div
              style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}
            ></div>
          </Content>
          <Footer style={{ background: "white", padding: "24px" }}>
            <ShellFooter />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ShellLayout;
