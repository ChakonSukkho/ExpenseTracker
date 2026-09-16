import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Header />

      <SummaryCard
        title="Total Spending"
        value={`RM ${total}`}
      />

      <button onClick={() => setTotal(total + 10)}>
        Add RM 10
      </button>

      <br />

      <button onClick={() => setTotal(total - 10)}>
        Subtract RM 10
      </button>
      
    </div>
  );
}

export default App;