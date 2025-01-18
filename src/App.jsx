import "bootstrap/dist/css/bootstrap.min.css"

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
<Routes>
<Route path="/" element={<h1>home</h1>}></Route>
  <Route path="/login" element={<h1>Login</h1>}></Route>
</Routes>

  )
}

export default App
