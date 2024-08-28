import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
  background: yellow;
  border: 2px solid green;
`;

// Button에 style을 추가한 RoundButton 컴퍼넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function Sample2(props) {
  return (
    <>
      <Button>Normal</Button>
      <RoundedButton>RountButton</RoundedButton>
    </>
  );
}
export default Sample2;
