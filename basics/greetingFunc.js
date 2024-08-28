function Greeting() {
  return (
    // JSX를 활용한 예 : 문법은 HTML과 유사하지만 JS문법으로 변환된다.(바벨.js)
    <h1 className="greeting">Hello World~</h1>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Greeting));
