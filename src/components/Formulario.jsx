import GrupoInput from "./GrupoInput";
import { useState } from "react";

function Formulario({ quandoAdicionar }) {
  const [data, setData] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  function criaNegociacao() {
    const negociacao = {
      dataNegociacao: data,
      quantidadeNegociacao: quantidade,
      valorNegociacao: valor,
    };

    console.log(negociacao);

    quandoAdicionar(negociacao);
  }

  return (
    <form className="form  container form">
      <div className="row justify-content-around">
        <div className="form-group col">
          <GrupoInput
            classNameDivProp="form-group"
            classNameLabelProp="form-label"
            etiqueta="Data"
            htmlForProp="data"
            classNameInputProp="form-control"
            tipo="date"
            min={1}
            step={1}
            id="data"
            valor={data}
            aoDigitar={(event) => setData(event.target.value)}
          />
        </div>
        <div className="form-group col">
          <GrupoInput
            classNameDivProp="form-group"
            classNameLabelProp="form-label"
            etiqueta="Quantidade"
            htmlForProp="quantidade"
            classNameInputProp="form-control"
            tipo="number"
            min={1}
            step={1}
            id="quantidade"
            valor={quantidade}
            aoDigitar={(event) => setQuantidade(event.target.value)}
          />
        </div>

        <div className="form-group col">
          <GrupoInput
            classNameDivProp="form-group"
            classNameLabelProp="form-label"
            etiqueta="Valor"
            htmlForProp="valor"
            classNameInputProp="form-control"
            tipo="number"
            min={1}
            step={1}
            id="valor"
            valor={valor}
            aoDigitar={(event) => setValor(event.target.value)}
          />
        </div>

        <div className="col-1 d-flex align-items-end justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={criaNegociacao}
          >
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
