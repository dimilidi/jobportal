import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  fontSize?: string;
  padding?: string;
};

const UniButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-lightGreen text-white px-5 py-1 rounded-full"
      style={{ fontSize: props.fontSize, paddingInline: props.padding }}
    >
      {props.text}
    </button>
  );
};

export default UniButton;
