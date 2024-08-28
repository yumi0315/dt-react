// 연습문제
// props로 1000원을 받으면,
// 2000원 : 사이다
// 3000원 : 이온음료
// 받은 금액과 상품이름-콜라를 UI에 출력

function VendingMachine(props) {
  return (
    <>
      <h1>{`받은 금액은 ${props.price}원 입니다.`}</h1>
      <h1>
        {props.price == 1000
          ? "콜라"
          : props.price == 2000
          ? "사이다"
          : "이온음료"}
      </h1>
    </>
  );
}
export default VendingMachine;
