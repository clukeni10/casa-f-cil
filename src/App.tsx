import { Provider } from "@/components/ui/provider";
import "./App.css";
import Index from "./app/ui/pages";

export default function App() {
  return (
    <Provider>
      <Index />
    </Provider>
  );
}
