import DefaultChip, { DefaultChipPropsType } from "./DefaultChip";
import InputChip, { InputChipPropsType } from "./InputChip";
import FilterChip, { FilterChipPropsType } from "./FilterChip";

type ChipPropsType = {
  /** 타입 */
  state: "Default" | "Input" | "Filter";
  DefaultChipProps?: DefaultChipPropsType;
  InputChipProps?: InputChipPropsType;
  FilterChipProps?: FilterChipPropsType;
};

/**
 * Default는 image,Icon 사용가능
 * Input은과 Filter는 image,Icon, 사용가능 및 색이 어두움
 */
const Chip = ({
  state,
  DefaultChipProps,
  InputChipProps,
  FilterChipProps,
}: ChipPropsType) => {
  if (state === "Default") {
    return <DefaultChip {...DefaultChipProps} />;
  } else if (state === "Input") return <InputChip {...InputChipProps} />;
  else return <FilterChip {...FilterChipProps} />;
};

Chip.defaultProps = {
  state: "Default",
  DefaultChip: {
    text: "DefaultProps",
  },
};

export default Chip;
