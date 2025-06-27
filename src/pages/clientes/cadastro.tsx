import ClienteForm from "../../../components/forms/ClienteForm"
import SideBar from "../../../components/SideBar"

const ClienteCadastroPage = () => {
    return (
        <div className="content-container">
            <SideBar />
            <div className="form-box">
                <h3>Cadastrar Cliente</h3>
                <ClienteForm />
            </div>
        </div>
    )
}

export default ClienteCadastroPage