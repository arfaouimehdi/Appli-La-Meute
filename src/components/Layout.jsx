import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <main className="flex min-h-svh flex-col">
      <Navbar/>
      <section className="flex-grow container p-2">
        {/*c'est ici les pages enfant comme HomePage seront rendues*/ }
        <Outlet/>
      </section>

      <Footer/>
    </main>
  )
}
