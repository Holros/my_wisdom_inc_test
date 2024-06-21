import { useState } from "react";
import Button from "./Component/Button";
import Modal from "./Component/Modal";
import TemperatureConvert from "./Component/TemperatureConvert";
import CurrencyConvert from "./Component/CurrencyConvert";

function App() {
  const [value, setValue] = useState("");
  const [displayTemperatureModal, setDisplayTemperatureModal] = useState(false);
  const [displayCurrencyModal, setDisplayCurrencyModal] = useState(false);

  function evaluateExpression(expression) {
    try {
      expression = expression.replace(/\^/g, "**");
      const result = new Function("return " + expression)();
      if (result === undefined || result === null) {
        return "Error";
      }

      return result;

    } catch (error) {
      return "Error";
    }
  }

  return (
    <div className="bg-gray-500 h-[100vh] w-[100vw] p-4">
      <Modal
        displayModal={displayTemperatureModal}
        setDisplayModal={setDisplayTemperatureModal}
        heading={"Convert Temperature"}
        content={<TemperatureConvert />}
      />
      <Modal
        displayModal={displayCurrencyModal}
        setDisplayModal={setDisplayCurrencyModal}
        heading={"Convert Currency"}
        content={<CurrencyConvert />}
      />
      <div className="rounded-lg bg-black p-1 max-w-[32rem] m-auto flex flex-col gap-2">
        <p className="p-2 flex justify-center text-lg font-bold text-white">
          My Calculator
        </p>
        <div className="flex justify-end rounded-lg bg-white text-black text-2xl p-2 font-bold min-h-[50px] overflow-x-auto w-full">
          {value === "" ? "0" : value}
        </div>
        <div className="grid gap-2 grid-cols-4">
          {[
            ["C", "del", "temp", "$"],
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", ".", "^", "+"],
          ]
            .flat()
            .map((btn, index) => (
              <Button
                value={btn}
                key={index}
                onClick={(e) => {
                  btn === "temp"
                    ? setDisplayTemperatureModal(true)
                    : btn === "$"
                    ? setDisplayCurrencyModal(true)
                    : btn === "C"
                    ? setValue("")
                    : btn === "del"
                    ? setValue((value) =>
                        value === "Error" ? "" : value.slice(0, -1)
                      )
                    : setValue((value) => value + e.target.innerHTML);
                }}
              />
            ))}
          <button
            className="text-white px-1 py-2 rounded bg-blue-700 hover:bg-blue-500 font-bold text-center col-span-4"
            onClick={() =>
              setValue((value) => String(evaluateExpression(value)))
            }
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
