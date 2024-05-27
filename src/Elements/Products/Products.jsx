import "./Products.css";
import Produ from "./Produ/Produ";
import P1 from "../../images/P1.png";
import P2 from "../../images/P2.png";
import P3 from "../../images/P3.png";

function Products() {
  return (
    <div className="CountennerP">
      <h1 className="center">Conheça Nosso Produtos</h1>
      <div className="Products">
        <Produ UrlProdu={"https://www.instagram.com/reel/C7Md-QoLhvu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}ImgProdu={P1} NameProdu={"Penteadeira"} PriceProdu={"190,00"}></Produ>
        <Produ UrlProdu={"https://www.instagram.com/reel/C7FNsK4vcDF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}ImgProdu={P2} NameProdu={"Cômoda"} PriceProdu={"200,00"}></Produ>
        <div className="displayNone"><Produ UrlProdu={"https://www.instagram.com/reel/C7ES1THLuxs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}ImgProdu={P3} NameProdu={"Balanço"} PriceProdu={"180,00"}></Produ></div>
      </div>
    </div>
  );
}

export default Products;
