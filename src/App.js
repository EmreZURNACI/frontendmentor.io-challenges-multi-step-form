import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourInfo from "./Pages/YourInfo";
import SelectPlan from "./Pages/SelectPlan";
import AddOns from "./Pages/AddOns";
import Summary from "./Pages/Summary";
import Thanks from "./Pages/Thanks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YourInfo />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/addOns" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
