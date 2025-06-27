import FuncionarioForm from "../../../components/forms/FuncionarioForm"
import SideBar from "../../../components/SideBar"

const CadastroPage = ()=>{
    return (
        <div className="content-container">
            <SideBar/>
            <h3>Cadastrar Funcionário</h3>
            <FuncionarioForm/>
        </div>
    )
}

export default CadastroPage