import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import axios from "axios";
import NotFound from "./pages/NotFound";


const App = () => {
    
    const [etudiantsInitial, setEtudiantsInitial] = useState([]); 


    
    
    useEffect(()=>{
        axios.get("http://localhost:4000/etudiants")
        .then(res=>{
            setEtudiantsInitial(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        
    },[])

    
    
    
    return ( 
        <BrowserRouter  basename="/Student-Management">
        
        
        <main>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<StudentForm etudiantsInitial={etudiantsInitial} setEtudiantsInitial={setEtudiantsInitial}/>}/>
            <Route path="/etudiants" element={<StudentList etudiantsInitial={etudiantsInitial} setEtudiantsInitial={setEtudiantsInitial}/>}/>
            <Route path="/etudiant/:id" element={<StudentDetail etudiantsInitial={etudiantsInitial} setEtudiantsInitial={setEtudiantsInitial}/>}/>
            <Route path="*" element={<NotFound/>}/>


        </Routes>
        </main>
        
        
        





        




        
        
        
        </BrowserRouter>
    );
}
 
export default App;