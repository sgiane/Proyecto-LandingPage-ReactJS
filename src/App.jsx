import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Fondo from "./assets/Fondo.jpg"

function App() {

      const bgImagen = {
      backgroundImage: `url(${Fondo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "buttom",
      backgroundSize: "cover",
      position: "relative"
    }

  return (

    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
