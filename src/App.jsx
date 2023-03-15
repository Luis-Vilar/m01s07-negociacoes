import { Header } from "./components/Header";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

export const App = () => {
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        {/* OS COMPONENTES SERÃO ENCAIXADOS AQUI! */}
        <Formulario />
        <Tabela />
       
      </div>
    </div>
  );
};

