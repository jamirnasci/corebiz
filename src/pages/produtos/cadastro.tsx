import ProdutoForm from "../../../components/forms/ProdutoForm"
import SideBar from "../../../components/SideBar"

const CadastrarProdutoPage = ()=>{
    return (
        <div>
            <SideBar/>
            <div className="container w-75">
                <h3>Cadastrar Produto</h3>
                <ProdutoForm/>
            </div>
        </div>
    )
}

export default CadastrarProdutoPage