import { Button, Input, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ShellFooter = () => {
  return (
    <div style={{ margin: "0 40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
        }}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <img
              src="/img/lunarshift-logo.png"
              alt="Lunarshift"
              style={{ height: 48 }}
            />
          </div>
          <Paragraph
            type="secondary"
            style={{ color: "#3D3D3D", lineHeight: "28px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Title level={5}>COMPANY</Title>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              About
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Features
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Works
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Career
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Title level={5}>RESOURCES</Title>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Free eBooks
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Development Tutorial
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              How to - Blog
            </a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="/" style={{ color: "#3D3D3D" }}>
              Youtube Playlist
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Title level={5}>LOREM IPSUM</Title>
          <div style={{ marginBottom: 16 }}>
            <Input variant="filled" placeholder="Lorem Ipsum dolor" />
          </div>
          <Button
            type="primary"
            block
            style={{
              height: "40px",
              fontSize: "16px",
              background:
                "linear-gradient(to right top, #3779BC, #336699, #295985)",
              marginBottom: "16px",
              boxShadow: "0 2px 12px #00000014",
            }}
          >
            Dolor Sit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShellFooter;
