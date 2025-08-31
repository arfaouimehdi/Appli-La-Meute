import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        // p-4 padding (espace autour du texte haut, bas, gauche, droite)
        // mb-3 margin-bottom (espace en dessou)
        <nav  className="p-4 mb-3 border-2 border-bottom shadow">
            <div className="container flex justify beetween mx-auto">
                <Link href="/">Le Refuge de la Meute</Link>
            </div>

        </nav>

    )
}