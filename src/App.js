import './App.css';
import VirtualizedList from './VirtualizedList/VirtualizedList';
import { USER_DATA } from './lib/Constants';


function App() {
  return (
    <VirtualizedList items={USER_DATA} containerHeight={500} itemHeight={30}/>
  );
}

export default App;
