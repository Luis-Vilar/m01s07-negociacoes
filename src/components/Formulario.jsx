import GrupoInput from "./GrupoInput";

function Formulario() {
  return (
    <form className="form container">
      <div className="row">
        <GrupoInput
          textProp="Data"
          classNameProp="form-group"
          htmlForProps="data"
          typeProp="date"
          minProp="1"
          stepProp="1"
          idProp="data"
          clasNameProp="form-control"
          valueProp="1"
        />
        <GrupoInput
          textProp="Quantidade"
          classNameProp="form-group"
          htmlForProps="quantidade"
          typeProp="number"
          minProp="1"
          stepProp="1"
          idProp="quantidade"
          clasNameProp="form-control"
          valueProp="1"
        />
        <GrupoInput
          textProp="Valor"
          classNameProp="form-group"
          htmlForProps="quantidade"
          typeProp="number"
          minProp="1"
          stepProp="1"
          idProp="quantidade"
          clasNameProp="form-control"
          valueProp="1"
        />

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
