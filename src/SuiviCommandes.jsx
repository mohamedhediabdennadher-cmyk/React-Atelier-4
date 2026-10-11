import Commande from './Commande';
function SuiviCommandes() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-secondary">Suivi des commandes</h2>
            <Commande id="101" nom="Casque Bluetooth" statut="Livrée" couleurStatut="green"/>
            <Commande id="102" nom="Clavier Mécanique" statut="En cours d'expédition" couleurStatut="orange"/>
            <Commande id="103" nom="Ecran 4K" statut="En attente de paiment" couleurStatut="red"/>
        </div>
    );
}
export default SuiviCommandes;