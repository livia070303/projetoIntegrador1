import Logo from '../assets/SGCPE.png';
import CardFuncionalidade from "../components/CardFuncionalidade";

export default function EscolhaFuncionalidade(){
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '40%', height: '60%', display: 'flex', flexDirection: 'row', display: "flex", justifyContent: 'center', alignContent: 'center'}}>
              <CardFuncionalidade img={Logo} header='Atribuição de Aulas' url={''}  />
            </div>
            <div style={{width: '40%', height: '60%', display: 'flex', flexDirection: 'row', display: "flex", justifyContent: 'center', alignContent: 'center'}}>
                <CardFuncionalidade img={Logo} header='Cadastro de Professores' url={''}  />
            </div>
        </div>
    )
}