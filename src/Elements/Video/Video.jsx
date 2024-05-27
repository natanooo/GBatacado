import "./Video.css";
import VideoUrl from "../../images/Anuncio1.mp4"

function Video() {
  return (
    <div className="Video" id="video">
      <h1>Sobre Nossa Lista <br /> De Fornecedores</h1>
      <video width="300" height="530" controls autoplay loop muted>
       <source src={VideoUrl} type="video/mp4" />
       Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  )
}

export default Video;
