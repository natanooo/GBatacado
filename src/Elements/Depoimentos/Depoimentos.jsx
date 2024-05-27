import "./Depoimentos.css";
import Dep1 from "../../images/Dep1.png"
import Dep2 from "../../images/Dep2.png"

function Depoimentos({DepoimentosRef}) {
  return (

    <div className="Depoimentos">
    <div ref={DepoimentosRef} />
      <h1>Depoimentos</h1>
      <div><img src={Dep1} alt="" /><img src={Dep2} alt="" /></div>

    </div>
  )
}

export default Depoimentos;
