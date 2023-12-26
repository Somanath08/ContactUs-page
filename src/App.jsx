import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactFrom from "./Components/ContactForm/ContactFrom";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <main className="main-container">
        <ContactHeader></ContactHeader>
        <ContactFrom></ContactFrom>
      </main>
    </>
  );
}

export default App;
