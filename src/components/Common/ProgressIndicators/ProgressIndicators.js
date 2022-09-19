import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const ProgressIndicators = () => {
  return <Spin indicator={antIcon} />;
};

export default ProgressIndicators;
