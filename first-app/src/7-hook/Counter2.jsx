import React, { useState, useEffect } from "react";

// useEffect : 함수형 컴퍼넌트에서 생명주기 함수를 지원

function Counter(props) {
  const [count, setCount] = useState(0);

  // componentDidMount(), componentDidUpdate()와 비슷하게 동작한다.
  useEffect(() => {
    console.log(`총 ${count}번 클릭했습니다.`);
  });

  useEffect(() => {
    console.log(`총 ${count}번 클릭했습니다.`);
    return () => {
      // componentDidUnMount() 시에 호출됨.
    };
  });

  useEffect(() => {
    console.log(`총 ${count}번 클릭했습니다.`);
    return () => {
      // componentDidUnMount() 시에 호출됨.
    };
  }, /* 의존성변수 */ count);
  // 의존성변수의 값이 바뀌면 Re-Render(useEffect호출)한다

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭하세요</button>
    </div>
  );
}

export default Counter;
