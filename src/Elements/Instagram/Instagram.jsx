import "./Instagram.css";
import Logo from "../../images/Logo.png"


function Instagram() {
  return (
    <div className="Instagram">
      <h1>Acesse Nosso Instagram Para Mais</h1>
      <a href="https://www.instagram.com/gabriela.atacado?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <img src={Logo} alt="" />
      </a>
    </div>
  );
}

export default Instagram;
