import FuncionarioForm from "../../../components/forms/FuncionarioForm"
import SideBar from "../../../components/SideBar"

const CadastroPage = ()=>{
    return (
        <div className="content-container">
            <SideBar/>
            <div className="form-box">
                <h3>Cadastrar Funcionário</h3>
                <FuncionarioForm/>
            </div>
        </div>
    )
}

export default CadastroPage