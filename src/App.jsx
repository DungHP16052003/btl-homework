import ScrollTop from './components/ScrollTop'
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from './components/UserProvider';


function App() {
  
  return (
    <Router>
      <ScrollTop/>
      <UserProvider/>
      <AppRoutes/>
    </Router>
  )
}

export default App
