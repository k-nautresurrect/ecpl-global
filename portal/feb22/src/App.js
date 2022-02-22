import "./App.css";
import BarGraph from "./components/BarGraph/BarGraph";
import LineChart from "./components/LineChart/LineChart";
import PieChart from "./components/PieChart/PieChart";

function App() {
  return (
    <div className="App">
      <BarGraph />
      <PieChart />
      <LineChart />
    </div>
  );
}

export default App;
