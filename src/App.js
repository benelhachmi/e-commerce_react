import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Navbar/Navbar';
import Content from './components/content/Content';
import Barre from './components/content/Barre/Barre'
function App() {

  return (
    <Provider store={store}>
      <div className="App">
      <Navbar />
      <Barre />
    
      <Content />
      </div>
    </Provider>
  );
}

export default App;
