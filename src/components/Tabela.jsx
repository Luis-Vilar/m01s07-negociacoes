import PropTypes from "prop-types";

function Tabela(props) {
  return (
    <div class="my-5">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {props.negociacoes.map((negociacao, index) => (
            <tr key={index}>
              <td>{negociacao.dataNegociacao}</td>
              <td>{negociacao.quantidadeNegociacao}</td>
              <td>{negociacao.valorNegociacao}</td>
              <td>             
              <td>{Number(negociacao.valorNegociacao * negociacao.quantidadeNegociacao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};
export default Tabela;
