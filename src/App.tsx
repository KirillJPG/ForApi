import { Layout } from "@components/layout/Layout"
import { Home } from "@components/pages/Home/Home"
import { NotFound } from "@components/pages/NotFound/NotFound"
import { Product } from "@components/pages/Product/Product"
import { Route, Routes } from "react-router"
function App() {

  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/product/:id" element={<Product />}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default App
