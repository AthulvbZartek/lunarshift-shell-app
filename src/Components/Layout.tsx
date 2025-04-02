import React, { useState } from "react";
import {
  HomeOutlined,
  FileOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Navbar from "./Navbar";
import ShellFooter from "./Footer";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
type UserType = "employer" | "professional";

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

const professionalMenuItems: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("My Jobs", "2", <FileOutlined />),
  getItem("Chats", "3", <MessageOutlined />),
  getItem("Notifications", "4", <BellOutlined />),
  getItem("Settings", "5", <SettingOutlined />),
];

const employerMenuItems: MenuItem[] = [
  getItem("Dashboard", "1", <DashboardOutlined />),
  getItem("Jobs", "2", <FileOutlined />, [
    getItem("Post a Job", "2-1"),
    getItem("All Jobs", "2-2"),
  ]),
  getItem("Settings", "3", <SettingOutlined />),
];

const ShellLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // TODO: Replace with actual user type from authentication
  const [userType] = useState<UserType>("employer");

  const menuItems =
    userType === "employer" ? employerMenuItems : professionalMenuItems;

  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout style={{ height: "calc(100vh - 64px)" }}>
        <Sider
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: "white",
            borderRight: "1px solid #f0f0f0",
            position: "fixed",
            height: "calc(100vh - 64px)",
            left: 0,
            top: 64,
            zIndex: 1,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
          />
        </Sider>
        <Layout
          style={{
            background: "#f5f7fa",
            marginLeft: collapsed ? 80 : 200,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Content style={{ flex: 1, overflow: "auto" }}>
            <div
              style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}
            ></div>
            <Footer style={{ background: "white", padding: "24px" }}>
              <ShellFooter />
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ShellLayout;
