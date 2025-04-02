import "./App.css";
import ShellLayout from "./Components/Layout";
import { ConfigProvider } from "antd";
import { customTheme } from "./theme";

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <div>
        <ShellLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
