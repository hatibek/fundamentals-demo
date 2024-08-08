import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const handleReset = () => {
    setCalc({ ...calc, sign: "", num: 0, res: 0 });
  };

  const handleNumClick = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (value.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  //does not allow 0.000... , debug
  const handleCommaClick = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const handleSignClick = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      num: 0,
      res: !calc.res && calc.num ? calc.num : calc.res,
      sign: value,
    });

  };

  const handleInvert = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const handlePercent = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
    });
  };

  const handleEquals = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? `Can't divide by 0`
            : math(Number(calc.res), Number(calc.num), calc.sign),
        num: 0,
      });
    }
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : "calculator-button"}
              value={btn}
              onClick={
                btn === "C"
                  ? handleReset
                  : btn === "+-"
                  ? handleInvert
                  : btn === "%"
                  ? handlePercent
                  : btn === "="
                  ? handleEquals
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? handleSignClick
                  : btn === "."
                  ? handleCommaClick
                  : handleNumClick
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
