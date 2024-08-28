import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    // return 뒤에 소괄호 여부 : 바로 옆에(줄바꿈없이) 단일 요소가 있으면 생략 가능
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

// 화씨온도 -> 섭씨온도
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨온도 -> 화씨온도
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  // NaN -> Not a Number
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input); // 입력된 콜백함수를 수행
  const rounded = Math.round(output * 1000) / 1000; // 소수점 3번째자리에서 반올림

  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); // 섭씨c

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  // 섭씨온도 값
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

  // 화씨온도 값
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  // Shared State : 하위 컴포넌트가 공토된 부모 컴퍼넌트의 state를 공유하여 사용하는 것
  // State 끌어올리기 : 하위 컴퍼넌트의 state를 공통된 컴퍼넌트로 끌어올려서 사용하는 것

  return (
    <>
      {/* 모든 UI구성요소를 컴포넌트화 시켜서 구성한다. */}
      {/* 섭씨온도 컴퍼넌트 */}
      <TemperatureInput
        temperature={celsius}
        scale="c"
        onTemperatureChange={handleCelsiusChange}
      />
      {/* 화씨온도 컴퍼넌트 */}
      <TemperatureInput
        temperature={fahrenheit}
        scale="f"
        onTemperatureChange={handleFahrenheitChange}
      />
      {/* 물이 끓는지 표시 */}
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </>
  );
}

export default Calculator;
