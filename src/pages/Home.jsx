import { Link } from 'react-router-dom'


const Home = () => {


    return ( 

        <>
        
        <div className="container p-4 text-center d-flex flex-column justify-content-center align-items-center mt-5">
            <h3 className="fw-bold fst-italic" style={{color:"#640D5F"}}>Gestion des Etudiants</h3>
            <p className="text-secondary fw-bold">    
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/> Dolorem repellat voluptas laudantium quasi beatae <br/>
                inventore. Quisquam numquam similique veniam quia unde deleniti<br/>
                 voluptatum necessitatibus quod sequi quo perspiciatis perferendis<br/>
                nihil culpa excepturi voluptatem maxime delectus,<br/>
                 at dolores non voluptatibus reprehenderit?
            </p>
            <Link to={"/etudiants"}><button className="btn fw-bold text-light shadow" style={{backgroundColor:"#640D5F"}}>Liste des Etudiant</button></Link>
        </div>
        
        </>

    );
}
 
export default Home;