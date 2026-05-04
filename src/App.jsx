import { Outlet } from "react-router-dom";
import WarningBanner from "./components/WarningBanner";
import DisclaimerFooter from "./components/DisclaimerFooter";

function App() {
  return (
    <>
      <WarningBanner />
      <Outlet />
      <DisclaimerFooter />
    </>
  );
}

export default App;
