import { Layout } from "@components/layout/Layout"
import { Route, Routes } from "react-router"
function App() {

  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<>home</>}/>
          <Route path="/product/:id" element={<>1</>}/>
        </Route>
      </Routes>
  )
}

export default App
