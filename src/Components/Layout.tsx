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

// Define the routes and their corresponding iframe URLs
const routes = {
  "1": "http://localhost:3001", // Home app
  "2": "https://lunarshift-jobs-app.vercel.app/my-jobs", // My Jobs app
  "3": "http://localhost:3003", // Chats app
  "4": "http://localhost:3004", // Notifications app
  "5": "http://localhost:3005", // Settings app for professional
  "2-1": "http://localhost:3006", // Post a Job app
  "2-2": "http://localhost:3007", // All Jobs app
  "3-1": "http://localhost:3008", // Settings app for employer
};

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
  getItem("Settings", "3-1", <SettingOutlined />),
];

const ShellLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  // TODO: Replace with actual user type from authentication
  const [userType] = useState<UserType>("professional");

  const menuItems =
    userType === "employer" ? employerMenuItems : professionalMenuItems;

  const handleMenuClick = (item: MenuItem) => {
    if (item?.key) {
      setSelectedKey(item.key.toString());
    }
  };

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
            selectedKeys={[selectedKey]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
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
            <div style={{ margin: "0 auto", padding: "24px" }}>
              {routes[selectedKey as keyof typeof routes] && (
                <iframe
                  src={routes[selectedKey as keyof typeof routes]}
                  style={{
                    width: "100%",
                    height: "calc(100vh - 200px)",
                    border: "none",
                    borderRadius: "8px",
                    background: "white",
                  }}
                  title="Micro Frontend"
                />
              )}
            </div>
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
