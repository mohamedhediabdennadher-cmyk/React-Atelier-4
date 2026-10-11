import PanneauAccueil from './PanneauAccueil';
import SuiviCommandes from './SuiviCommandes';
import CommandeVirtuelle from './CommandeVirtuelle';

function App() {
  return (
    <div>
      <PanneauAccueil/>
      <SuiviCommandes/>
      <CommandeVirtuelle numero="CMD-1042"/>
      <CommandeVirtuelle numero="CMD-1043"/>
      <CommandeVirtuelle numero="CMD-1043"/>
    </div>
  );
}

export default App;