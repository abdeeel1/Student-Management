import { useNavigate, useParams } from "react-router-dom";

const StudentDetail = ({etudiantsInitial, setEtudiantsInitial}) => {
    
    const {id} = useParams()
    const etudiant = etudiantsInitial.find(e=>e.id===Number(id))

    const navigate = useNavigate()

    const SuccessStyle = {"color":"green"}
    const WarningStyle = {"color":"orange"}
    const DangerStyle = {"color":"red"}

    function GetStyle(x){
        if(x > 12){
            return SuccessStyle
        }else if(x >= 12){
            return WarningStyle
        }else{
            return DangerStyle
        }
    }
    
    
    
    
    return ( 
        <>
        <div className="mx-auto w-75 mt-3">
            <button onClick={()=>navigate(-1)} className="text-decoration-none fw-bold btn text-white" style={{backgroundColor:"#640D5F"}}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg> Retour a la liste</button>

        </div>

            <div className="mx-auto w-75 mt-2 card">


                <div className="p-3 d-flex gap-2 align-items-center  card-header" style={{backgroundColor:"#640D5F"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                    <div>
                    <h3 className="text-light fw-bold">{etudiant.prenom} {etudiant.nom}</h3>
                    <pre className="text-white">{etudiant.filiere}</pre>

                    </div>
                </div>
                <div className="card-body pb-3" style={{
                    
                }}>
                    <div style={{
                        display : "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                        gap : "20px"
                    }}>

                        <div className="bg-light rounded p-1">
                       <div className="p-2">
                         <p>Nom</p>
                        <p className="fw-bold">{etudiant.nom}</p>
                       </div>
                    </div>
                    <div className="bg-light rounded p-1">
                        <div className="p-2">
                            <p>Prénom</p>
                            <p className="fw-bold">{etudiant.prenom}</p>
                        </div>
                    </div>
                    <div className="bg-light rounded p-1">
                        <div className="p-2">
                            <p>Filière</p>
                            <p className="fw-bold">{etudiant.filiere}</p>
                        </div>
                    </div>
                    <div className="bg-light rounded p-1">
                        <div className="p-2">
                            <p>Moyenne Géneral</p>
                            <p className="fw-bold fs-3" style={GetStyle(etudiant.moyenne)}>{etudiant.moyenne}/20</p>
                        </div>
                    </div>

                    </div>
                    

                    <div className="p-3 mt-4  bg-light border-start border-primary border-4 rounded-3 d-flex align-items-center gap-2">
                        <span className="fw-semibold">Résultat :</span>

                        <span className="badge bg-success d-flex align-items-center gap-1 p-2">
                            ✔️ Validé
                        </span>
                    </div>
                    
                </div>
                
                

                
            </div>
        </>
     );
}
 
export default StudentDetail;