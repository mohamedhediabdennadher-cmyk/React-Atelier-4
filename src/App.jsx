import Card from "./components/Card";
import { WondersArr } from "./Data";
//import Login from "./components/Login";

function App() {
  return (
  <div className="container my-4">
    <h1 className="text-center mb-4">NATURAL WONDERS</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {WondersArr.map((wonder) => (
      <Card key={wonder.id} wonder={wonder} />
      ))}
    </div>
    {/* <Login /> */}
  </div>

  );
}

export default App;