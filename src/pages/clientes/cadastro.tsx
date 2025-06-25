import ClienteForm from "../../../components/forms/ClienteForm"
import SideBar from "../../../components/SideBar"

const ClienteCadastroPage = () => {
    return (
        <div className="container w-75">
            <SideBar />
            <h3>Cadastrar Cliente</h3>
            <ClienteForm />
        </div>
    )
}

export default ClienteCadastroPage