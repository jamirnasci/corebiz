import ClienteForm from "../../../components/forms/ClienteForm"
import SideBar from "../../../components/SideBar"

const SolicitacoesPage = ()=>{
    return (
        <div className="content-container">
            <SideBar/>
            <div className="form-box">
                <h3>Nova Venda</h3>
                <ClienteForm/>
            </div>
        </div>
    )
}

export default SolicitacoesPage