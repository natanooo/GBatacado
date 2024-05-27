import "./Variedade.css";
import ImgMarket from "../../images/todos market.png"

function Variedade() {
  return (
    <div>
      <div className="Variedade">
        <h1>Fornecemos Todas Essas Variedades <br />de Produtos</h1>
        <div className="List">
          <h2>Brinquedos <br />
              Papelaria<br />
              Semi Jóias<br />
              Utensílios domésticos<br />
              Casa e jardim<br />
              Artigos de festa<br />
              Extensão de cílios<br />
              Sapatos<br />
              Utensílios pra Cabeleleiros<br />
              Maquiagens
          </h2>

          <h2>Eletrocios e acessórios<br />
              Cama mesa e banho<br />
              Moveis em geral<br />
              Moda feminina<br />
              Plus size<br />
              Moda fitness<br />
              Moda praia<br />
              Produtos automotivos<br />
              Games<br />
              Pet shop e Sex shop
          </h2>
        </div>
      </div>
      <div className="marketplace">
      <h1>Venda Seus Produtos Nos <br /> Grandes Marketplaces</h1>
      <img src={ImgMarket} alt="" />
    </div>
   </div>
  )
}

export default Variedade;
