const ProdutoForm = () => {
    return (
        <form action="">
            <div className="row">
                <div className="col">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="nome" name="nome" />
                </div>
                <div className="col">
                    <label htmlFor="marca">Marca</label>
                    <input type="text" className="form-control" id="marca" name="marca" />
                </div>
                <div className="col">
                    <label htmlFor="categoria">Categoria</label>
                    <select className="form-select form-select-sm" name="categoria" id="categoria">
                        <option value="1">1</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="fornecedor">Fornecedor</label>
                    <select className="form-select form-select-sm" name="fornecedor" id="fornecedor">
                        <option value="1">1</option>
                        <option value="1">1</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="preco-compra">Preço Compra</label>
                    <input className="form-control" type="number" name="preco-compra" id="preco-compra" step={0.01} />
                </div>
                <div className="col">
                    <label htmlFor="preco-venda">Preço Venda</label>
                    <input className="form-control" type="number" name="preco-venda" id="preco-venda" step={0.01} />
                </div>
                <div className="col">
                    <label htmlFor="comissao">Comissão (%)</label>
                    <input className="form-control" type="number" name="comissao" id="comissao" step={0.01} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="data-entrada">Data entrada</label>
                    <input className="form-control" type="date" name="data-entrada" id="data-entrada" />
                </div>
                <div className="col">
                    <label htmlFor="data-validade">Data Validade</label>
                    <input className="form-control" type="date" name="data-validade" id="data-validade" />
                </div>
            </div>
            <input className="btn btn-success bg-gradient mt-2 w-25" type="submit" value="Cadastrar" />
        </form>
    )
}

export default ProdutoForm