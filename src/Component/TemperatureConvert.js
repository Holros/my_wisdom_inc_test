import { useState } from "react";

const TemperatureConvert = () => {
    const [celsius, setCelsius] = useState("");
    const [Kelvin, setKelvin] = useState("");  

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setKelvin(value ? (Number(value) + 273.15).toFixed(2) : "");
      };
    
      const handleKelvinChange = (e) => {
        const value = e.target.value;
        setKelvin(value);
        setCelsius(value ? (Number(value) - 273.15).toFixed(2) : "");
      };

    return (
<div className="flex flex-col gap-4 py-3">
            <div>
              <label>
                Celsius:
                <input
                  type="number"
                  value={celsius}
                  onChange={handleCelsiusChange}
                  className="ml-2 p-1 border rounded"
                />
              </label>
            </div>
            <div>
              <label>
                Kelvin:
                <input
                  type="number"
                  value={Kelvin}
                  onChange={handleKelvinChange}
                  className="ml-2 p-1 border rounded"
                />
              </label>
            </div>
          </div>
    )
}

export default TemperatureConvert