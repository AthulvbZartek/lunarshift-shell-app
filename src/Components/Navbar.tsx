import { EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Layout } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/img/lunarshift-logo.png" alt="Lunarshift" height={48} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button type="text" icon={<EnvironmentOutlined />}>
          US
        </Button>
        <Input
          variant="filled"
          placeholder="Search"
          style={{ width: 200, marginRight: 16 }}
          prefix={<SearchOutlined style={{ color: "#3779BC" }} />}
        />
      </div>
    </Header>
  );
};

export default Navbar;
