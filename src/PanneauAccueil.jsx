function PanneauAccueil() {
    const numberCommandes = 3;

    return (
        <div className="Container mt-4 p-4 bg-light border rounded shadow-sm">
            <h1 className="text-primary mb-3">Mon espace client</h1>
            <p className="lead mb-0">
                Vous avez actuellement <strong>{numberCommandes}</strong> command(s) en cours.
            </p>
        </div>
    );
}
export default PanneauAccueil;