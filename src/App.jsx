import "./App.css";
import Courses from "./Component/Courses/Courses";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex gap-3">
        <Courses />
      </div>
    </div>
  );
}

export default App;
