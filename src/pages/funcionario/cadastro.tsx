import FuncionarioForm from "../../../components/FuncionarioForm"
import SideBar from "../../../components/SideBar"

const CadastroPage = ()=>{
    return (
        <div className="container w-75">
            <SideBar/>
            <h3>Cadastrar Funcionário</h3>
            <FuncionarioForm/>
        </div>
    )
}

export default CadastroPage