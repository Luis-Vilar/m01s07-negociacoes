import GrupoInput from "./GrupoInput";

function Formulario(props) {

  return (
    <form className="form  container form">
      <div className="row justify-content-around">
        <div className="form-group col">
          <GrupoInput
            textProp="Data"
            classNameLabelProp="form-label"
            classNameProp="form-group"
            htmlForProps="data"
            typeProp="date"
            minProp={1}
            stepProp={1}
            idProp="data"
            classNameInputProp="form-control"
            valueProp={1}
          />
        </div>
        <div className="form-group col">
          <GrupoInput
            textProp="Quantidade"
            classNameLabelProp="form-label"
            classNameProp="form-group"
            htmlForProps="quantidade"
            typeProp="number"
            minProp={1}
            stepProp={1}
            idProp="quantidade"
            classNameInputProp="form-control"
            valueProp={1}
          />
        </div>

        <div className="form-group col">
          <GrupoInput
            textProp="Valor"
            classNameLabelProp="form-label"
            classNameProp="form-group"
            htmlForProps="valor"
            typeProp="number"
            minProp={1}
            stepProp={1}
            idProp="valor"
            classNameInputProp="form-control"
            valueProp={1}
          />
        </div>

        <div className="col-1 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" type="button">
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
}



export default Formulario;
