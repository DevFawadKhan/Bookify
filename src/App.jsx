import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from 'react-router-dom'
// Pages
import Register from "../pages/Register"
import Login from "../pages/Login"

function App() {
  return (
<Routes>
<Route path="/" element={<h1>home</h1>}></Route>
  <Route path="/signup" element={<Register/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
</Routes>

  )
}

export default App
