import ScrollTop from './components/ScrollTop'
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollTop/>
      <AppRoutes/>
    </Router>
  )
}

export default App
