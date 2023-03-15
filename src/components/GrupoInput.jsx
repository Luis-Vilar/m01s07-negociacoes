import PropTypes from "prop-types";

function GrupoInput(props) {
  return (
    <div className={props.classNameProp}>
      <label htmlFor={props.htmlForProp} className={props.classNameLabelProp}>
        {props.textProp}
      </label>
      <input
        type={props.typeProp}
        min={props.minProp}
        step={props.stepProp}
        id={props.idProp}
        className={props.classNameInputProp}
        value={props.valueProp}
        // onChange={props.onChangeProp}
        required
      />
    </div>
  );
}

GrupoInput.propTypes = {
  idProp: PropTypes.string.isRequired,
  classNameLabelProp: PropTypes.string.isRequired,
  typeProp: PropTypes.string.isRequired,
  minProp: PropTypes.number,
  stepProp: PropTypes.number,
  valueProp: PropTypes.number.isRequired,
//   onChangeProp: PropTypes.func.isRequired,
};
export default GrupoInput;
