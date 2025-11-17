/* eslint-disable array-callback-return */
import axios from 'axios'
import { Link } from 'react-router-dom'


const StudentList = ({etudiantsInitial, setEtudiantsInitial}) => {
    
    const SuccessStyle = {"backgroundColor":"green"}
    const WarningStyle = {"backgroundColor":"orange"}
    const DangerStyle = {"backgroundColor":"red"}

    function GetStyles(etudiantNote){
        if(etudiantNote > 12){
            return SuccessStyle
        }else if(etudiantNote >= 12){
            return WarningStyle
        }else{
            return DangerStyle
        }
    }

    

    function deleteStudent(id) {
    const realId = Number(id)

    axios.delete(`http://localhost:4000/etudiants/${realId}`)
        .then(() => {
        setEtudiantsInitial(prev =>
            prev.filter(e => Number(e.id) !== realId)
        )
        })
        .catch(err => console.log("DELETE ERROR:", err))
    }

    const moyenneGenerale = etudiantsInitial.reduce((total, etudiant)=>total+Number(etudiant.moyenne),0)/etudiantsInitial.length

    const grouped = etudiantsInitial.reduce((acc, e) => {
    (acc[e.filiere] ||= []).push(Number(e.moyenne));
    return acc;
    }, {});

    const moyenneParFiliere = Object.fromEntries(
    Object.entries(grouped).map(([filiere, notes]) => [
        filiere,
        (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2)
    ])
    );

    
    
    
    
    
    
    
    return ( 
        <>
            <div className="p-2 bg-light bg-opacity-25 shadow rounded mt-3 w-75 text-center mx-auto">
                <h4 className="text- fw-bold">Liste des Etudiants ({etudiantsInitial.length})</h4>
            </div>
            <table className="table table-light table-borderless table-hover text-center mx-auto w-75 my-4">
                <thead style={{backgroundColor:"#640D5F"}}>
                    <th className="p-3 text-light">Nom</th>
                    <th className="p-3 text-light">Prenom</th>
                    <th className="p-3 text-light">Filiere</th>
                    <th className="p-3 text-light">Moyenne</th>
                    <th className="p-3 text-light">Actions</th>
                </thead>
                
                {etudiantsInitial.map((etudiant)=>{
                        return (
                        <tbody key={etudiant.id}>
                            <tr>
                                <td className="p-3 fw-bold">{etudiant.nom}</td>
                                <td className="p-3 fw-bold">{etudiant.prenom}</td>
                                <td className="p-3 fw-bold">{etudiant.filiere}</td>
                                <td className="p-3 fw-bold"><p style={GetStyles(etudiant.moyenne)} className='rounded-5'>{etudiant.moyenne}</p></td>
                                <td className='p-3'>
                                    <div className="d-flex gap-2 justify-content-center align-items-center">

                                    <Link to={`/etudiant/${etudiant.id}`} className="text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></Link>
                                    <Link onClick={()=>deleteStudent(etudiant.id)} className="text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></Link>

                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                        )
                })}
                
            </table>
            <div className='p-2 bg-light bg-opacity-25 shadow rounded mt-3 w-75 mx-auto'>
                <h5 className='ms-1 mt-2 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/></svg> Statistiques</h5>

                <div className='p-3 rounded mt-3' style={{
                        background: "white",
                        borderRadius: "12px",
                        border: "1px solid #e6e9ff"
                    }}>
                    <span className='text-secondary fw-bold'>Moyenne Génerale</span>
                    <p className='fs-4 text-primary fw-bold'>{moyenneGenerale.toFixed(2)}/20</p>
                </div>

                <p className='mt-2 text-black fw-bold ms-1'>Moyenne par Filiere :</p>
                
                

                {Object.entries(moyenneParFiliere).map(([filiere, moyenne]) => (
                <div 
                    key={filiere}
                    className="d-flex  justify-content-between align-items-center p-2 px-3 mb-2 rounded" 
                    style={{
                        background: "white",
                        borderRadius: "12px",
                        border: "1px solid #e6e9ff"
                    }}
                    >
                    <span className="fw-semibold">{filiere}</span>
                    <span className="fw-bold text-primary">{moyenne}/20</span>
                    </div>
                ))}
                </div>

            
        </>
     );
}
 
export default StudentList;