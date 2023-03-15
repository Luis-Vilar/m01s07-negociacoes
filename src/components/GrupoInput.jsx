function GrupoInput(props) {
  return (
    <div className={props.classNameProp}>
      <label htmlFor={props.htmlForProp}>{props.textProp}</label>
      <input
        type={props.typeProp}
        min={props.minProp}
        step={props.stepProp}
        id={props.idProp}
        className={props.clasNameProp}
        value={props.valueProp}
        required
      />
    </div>
  );
}

export default GrupoInput;
