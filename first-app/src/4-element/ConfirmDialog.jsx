function Button(props) {
  return <button className={`bg-${props.color}`}>{props.children}</button>;
}

function ConfirmDialog(props) {
  return (
    <>
      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
      <Button color="green">
        <b>확인</b>
      </Button>
    </>
  );
}

export default ConfirmDialog;
