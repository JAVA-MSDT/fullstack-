import "./App.css";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Contacts />
      <AddContact />
    </div>
  );
}

export default App;
