import React from "react";
import { StyledCounter, Value } from "./styled";
import Button from "../button/button";

function Counter({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;

    return (
      <StyledCounter className={className}>
        <Button disabled={isDisabledMinus} size="small" onClick={() => onChange && onChange(value - 1)}>-</Button>
        <Value
        value={value}
        size={2}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value < minValue ? minValue : value);
        }}
      />
        <Button size="small" onClick={() => onChange && onChange(value + 1)}>+</Button>
      </StyledCounter>
    );
  }
  
  export default Counter;