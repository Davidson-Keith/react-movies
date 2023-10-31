import React from "react";

export default function SelectNumber(props: SelectNumberProps) {
  const arr = Array(props.maxValue).fill(0);
  return (
    <select value={props.currentValue} onChange={(e) => {
      console.log(e.currentTarget.value)
      props.onSelected(parseInt(e.currentTarget.value));
    }}>
      {arr.map((val, index) =>
        <option key={index} value={index + 1}>{props.selectOptionDisplayContent(index + 1)}</option>
      )}
    </select>
  )
}

interface SelectNumberProps {
  maxValue: number;
  currentValue: number;

  onSelected(value: number): void;

  selectOptionDisplayContent(value: number): React.ReactNode;
}

SelectNumber.defaultProps = {
  maxValue: 5
}