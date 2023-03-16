import PropTypes from "prop-types";

function GrupoInput(props) {
  return (
    <div className={props.classNameDivProp}>
      <label htmlFor={props.htmlForProp} className={props.classNameLabelProp} >
        {props.etiqueta}
      </label>
      <input
        type={props.tipo}
        min={props.min}
        step={props.stepProp}
        id={props.id}
        className={props.classNameInputProp}
        value={props.valor}
        required
        onChange={props.aoDigitar}
      />
    </div>
  );
}

GrupoInput.propTypes = {
  id: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  aoDigitar: PropTypes.func.isRequired,
};
export default GrupoInput;
