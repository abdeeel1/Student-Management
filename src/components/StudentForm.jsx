import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentForm = ({ etudiantsInitial, setEtudiantsInitial }) => {

    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        filiere: "",
        moyenne: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function Submit(e) {
        e.preventDefault();
    }

    function addStudent() {

        if (!form.nom || !form.prenom || !form.filiere || !form.moyenne) {
            return;
        }

        const newStudent = {
            id: parseInt(etudiantsInitial.length + 1),
            nom: form.nom,
            prenom: form.prenom,
            filiere: form.filiere,
            moyenne: Number(form.moyenne)
        };

        axios.post("http://localhost:4000/etudiants",newStudent)
        .then(res=>{
            setEtudiantsInitial(prev=> [...prev, res.data])
        })

        console.log("Students:", [...etudiantsInitial, newStudent]);
    }

    return (
        <>
            <div className="p-2 bg-light bg-opacity-25 shadow rounded mt-3 w-75 text-center mx-auto">
                <h4 className="text- fw-bold">Ajouter un Etudiant</h4>
            </div>

            <div className="p-2 bg-light bg-opacity-25 shadow rounded mt-3 w-75 mx-auto">
                <form onSubmit={Submit}>
                    <label className="fw-bold">Nom</label>
                    <input name="nom" value={form.nom} onChange={handleChange} type="text" className="form-control my-2" />

                    <label className="fw-bold">Prenom</label>
                    <input name="prenom" value={form.prenom} onChange={handleChange} type="text" className="form-control my-2" />

                    <label className="fw-bold">Filière</label>
                    <select name="filiere" value={form.filiere} onChange={handleChange} className="form-select my-2">
                        <option value="">Sélectionnez une Filière</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Génie Industriel">Génie Industriel</option>
                        <option value="Digital Design">Digital Design</option>
                    </select>

                    <label className="fw-bold">Moyenne Général</label>
                    <input name="moyenne" value={form.moyenne} onChange={handleChange} type="text" className="form-control my-2" placeholder="Note sur 20" />

                    <Link className="text-decoration-none text-light" to={"/etudiants"}>
                    <button
                        type="button"
                        className="btn text-light w-100 mt-3"
                        style={{ backgroundColor: "#640D5F" }}
                        onClick={addStudent}
                    >
                        Ajouter L'étudiant
                    </button>
                    </Link>
                    
                </form>
            </div>
        </>
    );
};

export default StudentForm;
