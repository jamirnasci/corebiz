import ProdutoForm from "../../../components/forms/ProdutoForm"
import SideBar from "../../../components/SideBar"

const CadastrarProdutoPage = ()=>{
    return (
        <div className="content-container">
            <SideBar/>
            <div className="form-box">
                <h3>Cadastrar Produto</h3>
                <ProdutoForm/>
            </div>
        </div>
    )
}

export default CadastrarProdutoPage