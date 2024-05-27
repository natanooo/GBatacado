import "./Footer.css";
import N from "../../images/N.png"


function Footer() {
  return (
    <div className="Footer">
      <h1>Desenvolvido Por <a href=""><img src={N} alt="" />atan</a></h1>
      <h1>© 2024 Todos os direitos reservados.</h1>
    </div>
  );
}

export default Footer;
