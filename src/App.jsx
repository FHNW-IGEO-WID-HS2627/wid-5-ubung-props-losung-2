import { useState } from "react";
import Footer from "./Footer";
import Tabelle from "./Tabelle";
import Header from "./Header";
import "./App.css";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");

  return (
    <div className="App">
      <Header
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl}
        setSuchbegriff={setSuchbegriff}
        setKantonAuswahl={setKantonAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
      />
      <Tabelle
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl}
      />
      <Footer
        setSuchbegriff={setSuchbegriff}
        setKantonAuswahl={setKantonAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
      />
    </div>
  );
}

export default App;
