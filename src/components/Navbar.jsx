import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { text: "Accueil", path: "/" },
    { text: "Tous les personnages", path: "tous-les-personnages" },
    { text: "Erreur", path: "*" },
  ];

  return (
    // p-4 padding (espace autour du texte haut, bas, gauche, droite)
    // mb-3 margin-bottom (espace en dessou)
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <Link to="/">Le Refuge de la Meute</Link>
        <div className="flex gap-3">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              //Si lien est actif, je mets soulignement. Sinon rien de spécial
              className={({ isActive }) =>
                `text-xl ${isActive ? "underline" : ""}`
              }>
              {item.text}{" "}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
