export default function App(params) {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo(params) {
  return <h1> 🌴 Far away 💼 </h1>;
}

function Form(params) {
  return (
    <div className="add-form">
      <h3>what do you need for your trip ?</h3>
    </div>
  );
}

function PackingList(params) {
  return <div className="list">LIST</div>;
}

function Stats(params) {
  return (
    <footer className="stats">
      <em>you have X items on your list and you already packed X (X%)</em>
    </footer>
  );
}
