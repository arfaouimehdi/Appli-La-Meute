import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import AllCharactersPage from "./pages/AllCharactersPage";

const router = createBrowserRouter([
  {
    // Route parent : la racine du site
    path : "/",
    element : <Layout/>,

    // Routes enfants = contenu qui change dans le <Outlet /> du Layout
    children : [
      {
        path : "/", // Accueil → correspond à "/"
        element:<HomePage/>},
      {
        path : "tous-les-personnages", // Page qui affiche tous les personnages → "/tous-les-personnages"
        element:<AllCharactersPage/>},

      {
        path : "*", // Route "catch-all" → si aucune route ne correspond (404)
        element:<ErrorPage/>},
    ]


  }
])
function App() {
 

  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
