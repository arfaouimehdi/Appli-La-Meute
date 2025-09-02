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
    path : "/",// correspond a la racine du site
    element : <Layout/>,

    children : [
      {path : "/", element:<HomePage/>},
      {path : "/tous-les-personnages", element:<AllCharactersPage/>},
      {path : "/*", element:<ErrorPage/>},
    ]


  }
])
function App() {
 

  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
