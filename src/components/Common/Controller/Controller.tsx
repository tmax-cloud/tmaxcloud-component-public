import Controller_Checkbox, {
  ControllerCheckboxPropsType,
} from "./Controller_Checkbox";
import Controller_Switch, {
  ControllerSwitchPropsType,
} from "./Controller_Switch";
import Controller_Spinner, {
  ControllerSpinnerPropsType,
} from "./Controller_Spinner";

type ControllerPropsType = {
  /** 타입 */
  state: "Switch" | "Checkbox" | "Spinner";
  props:
    | ControllerSwitchPropsType
    | ControllerCheckboxPropsType
    | ControllerSpinnerPropsType;
};
/** 컨트롤러 */
const Controller = ({ state, props }: ControllerPropsType) => {
  return {
    Switch: <Controller_Switch {...props} />,
    Checkbox: <Controller_Checkbox {...props} />,
    Spinner: <Controller_Spinner {...props} />,
  }[state];
};

Controller.defaultProps = {
  state: "Switch",
  props: {
    size: "default",
    text: "text",
    disabled: false,
    setNumber: (e) => console.log(e),
    onChange: (e) => console.log(e),
  },
};

export default Controller;
