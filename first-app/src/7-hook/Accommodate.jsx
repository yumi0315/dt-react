import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; // 최대값 10 최소값 0

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, addCount, subCount] = useCounter(0);

  //DidMount, DidUpdate 시에 호출됨.
  useEffect(() => {
    console.log("useEffect() called!");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(isFull);
    console.log(typeof isFull);

    console.log(`current count : ${count}`);
  }, [count]); // 의존변수 count를 설정함으로 변경시 useEffect가 호출됨.
  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명을 수용했습니다.`}</p>
      <button onClick={addCount} disabled={isFull}>
        입장
      </button>
      <button onClick={subCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 찼습니다.</p>}
    </div>
  );
}
export default Accomodate;
