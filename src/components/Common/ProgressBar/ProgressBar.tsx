import React from "react";

type ProgressBarPropsType = {
  now: number;
};

const ProgressBar = ({ now }: ProgressBarPropsType) => {
  return <div>{now}</div>;
};

export { ProgressBar };
