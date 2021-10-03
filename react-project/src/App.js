// components
import Header from "./components/Header";
import Card from "./components/Home";
// tyle
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
