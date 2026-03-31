import Header from "./components/Header"
import TopHeader from "./components/TopHeader"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// main 
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 w-full z-50">
          <TopHeader />
          <Header />
        </div>
        <div className="pt-28 md:pt-32 min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
