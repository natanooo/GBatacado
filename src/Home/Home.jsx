import React, { useRef } from 'react';
import Navbar from "../Elements/Navbar/Navbar";
import Products from "../Elements/Products/Products";
import Instagram from "../Elements/Instagram/Instagram";
import Video from "../Elements/Video/Video";
import Variedade from "../Elements/Variedade/Variedade";
import Compre from "../Elements/Compre/Compre";
import Depoimentos from "../Elements/Depoimentos/Depoimentos";
import Footer from "../Elements/Footer/Footer";
import "./home.css";

function Home() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    // Oculta o menu após o scroll
    document.getElementById('OpenMenu').style.display = 'flex';
    document.getElementById('CloseMenu').style.display = 'none';
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('EMenu').style.display = 'none';
  };

  // Cria refs para cada seção
  const productRef = useRef(null);
  const videoRef = useRef(null);
  const variedadesRef = useRef(null);
  const comprasRef = useRef(null);
  const depoimentosRef = useRef(null);

  return (
    <div className="conteinner">
      <Navbar 
        // Passa a função scrollToRef para o Navbar
        scrollToVideo={() => scrollToRef(videoRef)}
        scrollToProduct={() => scrollToRef(productRef)}
        scrollToVariedades={() => scrollToRef(variedadesRef)}
        scrollToCompras={() => scrollToRef(comprasRef)}
        scrollToDepoimentos={() => scrollToRef(depoimentosRef)}
      />
      
      {/* Define refs para cada seção */}
      <div ref={productRef} />
      <Products />
      <Instagram />
      <div ref={videoRef} />
      <Video />
      <div ref={variedadesRef} />
      <Variedade />
      <div ref={comprasRef} />
      <Compre />
      {/* Passa a ref para Depoimentos como uma prop */}
      <Depoimentos DepoimentosRef={depoimentosRef}/>
      <Footer />
    </div>
  );
}

export default Home;
