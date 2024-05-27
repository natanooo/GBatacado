import Logo from '../../images/Logo.png'
import Menu from '../../images/Menu.png'
import X from '../../images/X.png'
import './Navbar.css'

function Navbar({scrollToProduct, scrollToVideo, scrollToVariedades, scrollToCompras, scrollToDepoimentos}) {
  function Open(){
    document.getElementById('OpenMenu').style.display = 'none'
    document.getElementById('CloseMenu').style.display = 'flex'
    document.getElementById('Menu').style.display = 'flex'
    document.getElementById('EMenu').style.display = 'flex'
  }
  function Close(){
    document.getElementById('OpenMenu').style.display = 'flex'
    document.getElementById('CloseMenu').style.display = 'none'
    document.getElementById('Menu').style.display = 'none'
    document.getElementById('EMenu').style.display = 'none'
  }

    return (
      <div>
        <div id='Menu' className='Menu'>
        <img onClick={Close} className='Close-menu' id='CloseMenu' src={X} alt="" />
            <li className='lli' onClick={scrollToProduct}>Produtos</li>
            <li onClick={scrollToVideo}>Vídeo</li>
            <li onClick={scrollToVariedades}>Variedades</li>
            <li onClick={scrollToCompras}>Compre</li>
            <li onClick={scrollToDepoimentos}>Depoimentos</li>
        </div>
        <div id='EMenu' className='EMenu'></div>
        <div className='Navbar'>
          <img className='Logo' src={Logo} alt="Logo" />
          <ul>
            <li onClick={scrollToProduct}>Produtos</li>
            <li className='lli' onClick={scrollToVideo}>Vídeo</li>
            <li className='lli' onClick={scrollToVariedades}>Variedades</li>
            <li className='lli' onClick={scrollToCompras}>Compre</li>
            <li className='lli' onClick={scrollToDepoimentos}>Depoimentos</li>
          </ul>
          <img onClick={Open} className='Button-menu' id='OpenMenu' src={Menu} alt="" />
        </div>
      </div>
    )
  }
  
  export default Navbar