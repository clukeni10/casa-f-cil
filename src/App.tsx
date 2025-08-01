import { Provider } from "@/components/ui/provider";
import "./App.css";
import Index from "./app/ui/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./app/ui/pages/About";
import Estates from "./app/ui/pages/Estates";
import Contacts from "./app/ui/pages/Contacts";

export default function App() {
  return (
    <Provider>
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/imoveis" element={<Estates />}/>
          <Route path="/sobre" element={<About />} />
          <Route path="/contatos" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
