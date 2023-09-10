import './App.css';
import { HigherOrderCompo } from './Component/Highoc';
import { Highofnc, HighorderFncn } from './Component/Highof';
import { PureCmp, PureCompoStateChange } from './Component/PureComp';
import './Component/Style.css'

function App() {
  return (
    <div className="content">
      <HighorderFncn value = {HigherOrderCompo}/>
      <Highofnc value = {HigherOrderCompo}/>
      <PureCmp/>
      <PureCompoStateChange/>
    </div>
  );
}

export default App;
