import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from 'react-router-dom'
// Pages
import Register from "../pages/Register"
import Login from "../pages/Login"
import List from "../pages/List"
// Component
import NavBar from "../components/Navbar"
function App() {
  return (
    <div>
    <NavBar></NavBar>
<Routes>
<Route path="/" element={<h1>home</h1>}></Route>
  <Route path="/signup" element={<Register/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/book/list" element={<List/>}></Route>
</Routes>
</div>
  )
}

export default App
