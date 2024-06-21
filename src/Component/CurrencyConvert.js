import { useState } from "react";

const CurrencyConvert = () => {
  const [dollars, setDollars] = useState("");
  const [bitcoin, setBitcoin] = useState("");

  const handleDollarsChange = (e) => {
    const value = e.target.value;
    setDollars(value);
    setBitcoin(value ? Number(value) * 0.000015697 : "");
  };

  const handleBitcoinChange = (e) => {
    const value = e.target.value;
    setBitcoin(value);
    setDollars(value ? (Number(value) / 0.000015697).toFixed(8) : "");
  };

  return (
    <div className="flex flex-col gap-4 py-3">
      <div>
        <label>
          Dollars:
          <input
            type="number"
            value={dollars}
            onChange={handleDollarsChange}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>
      <div>
        <label>
          Bitcoin:
          <input
            type="number"
            value={bitcoin}
            onChange={handleBitcoinChange}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default CurrencyConvert;
