import { useState, useEffect } from "react";

function CommandeVirtuelle() {
const [avancement, setAvancement] = useState(0);
const [estLivree, setEstLivree] = useState(false);

const situation = 
    avancement === 0 ? "Commande reçue":
    avancement < 2   ? "En préparation":
    avancement < 3   ? "Expédiée":
                        "Livrée";

    useEffect(() => {
        if(avancement >= 3){
            setEstLivree(true);
        }else {
            setEstLivree(false);
        }
    }, [avancement]);

    function avancer() {
        setAvancement(avancement + 1);
    }

    return(
        <div className="container mt-4 p-4 bg-light border rounded shadow-sm">
            <p>{situation}</p>
            <p>Etapes validées : {avancement}</p>
            {estLivree && <p className="text-success font-weight-bold">Statut : Commande bien livrée à destination!</p>}
            <button onClick={avancer} disabled={avancement >=3 }> >> Faire avancer</button>
            <button onClick={() => setAvancement(0)}>Annuler la commande</button>
        </div>
    )
 
}
export default CommandeVirtuelle;