import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {


  return (
    // react fragments
    <main className="flex min-h-svh flex-col">
    <Navbar/>
    <section className="flex-grow container p-2">
      <h1 className="font-bold rounded-xl bg-neutral-300 px-3 py-5  w-fit m-10">
        Coucou les Fighers !!!
      </h1>
      <div className="flex items-center justify-center">

      <Card/>
      </div>
      </section>

    <Footer/>
    </main>
  )
}

export default App
