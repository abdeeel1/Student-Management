import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        
        <nav className="d-flex justify-content-between p-2" style={{backgroundColor:"#640D5F"}}>
            <div className="d-flex gap-2 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                <h3 className="text-light fw-bold">Gestion des Etudiants</h3>
            </div>
            <div className="d-flex gap-2 me-2">
                <button className="btn btn-sm text-light" style={{backgroundColor:"#A376A2"}}><Link to={"/"} className="text-decoration-none text-light">Accueil</Link></button>
                <button className="btn btn-sm text-light" style={{backgroundColor:"#A376A2"}}><Link to={"/add"} className="text-decoration-none text-light"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></span>Ajouter</Link></button>
            </div>
        </nav>

        </>
     );
}
 
export default Navbar;