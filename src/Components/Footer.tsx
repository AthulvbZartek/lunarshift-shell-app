import { Button, Row, Col, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const ShellFooter = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={24}>
        <Col span={6}>
          <div style={{ marginBottom: 16 }}>
            <img
              src="/img/lunarshift-logo.png"
              alt="Lunarshift"
              style={{ height: 32 }}
            />
          </div>
          <Paragraph type="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Col>
        <Col span={6}>
          <Title level={5}>COMPANY</Title>
          <div style={{ marginBottom: 8 }}>
            <a href="#">About</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Features</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Works</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Career</a>
          </div>
        </Col>
        <Col span={6}>
          <Title level={5}>RESOURCES</Title>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Free eBooks</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Development Tutorial</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">How to - Blog</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <a href="#">Youtube Playlist</a>
          </div>
        </Col>
        <Col span={6}>
          <Title level={5}>LOREM IPSUM</Title>
          <div style={{ marginBottom: 16 }}>
            <Text>Lorem ipsum dolor</Text>
          </div>
          <Button type="primary" block>
            Dolor Sit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ShellFooter;
