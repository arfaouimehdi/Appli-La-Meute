import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {


  return (
    // react fragments
    <main className="flex min-h-svh flex-col">
    <Navbar/>
    <section className="flex-grow">
      <h1 className="font-bold rounded-xl bg-neutral-300 px-3 py-5  w-fit m-10">
        Coucou les Fighers !!!
      </h1>
      <Card/>
      </section>

    <Footer/>
    </main>
  )
}

export default App
