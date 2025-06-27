const ClienteForm = () => {
    return (
        <form className="w-75" method="POST" action="">
            <div className="row">
                <div className="col">
                    <label htmlFor="nome">Nome</label><br />
                    <input className="form-control" type="text" name="nome" id="nome" />
                </div>
                <div className="col">
                    <label htmlFor="sobrenome">Sobrenome</label><br />
                    <input className="form-control" type="text" name="sobrenome" id="sobrenome" />
                </div>
                <div className="col">
                    <label htmlFor="cpf">CPF</label><br />
                    <input className="form-control" type="text" name="cpf" id="cpf" maxLength={11} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="email">E-mail</label>
                    <input className="form-control" type="email" name="email" id="email" required />
                </div>
                <div className="col">
                    <label htmlFor="telefone">Telefone</label>
                    <input className="form-control" type="tel" name="telefone" id="telefone" required />
                </div>
            </div>
            <div>
                <label htmlFor="endereco">Endereço</label>
                <input className="form-control" type="text" name="endereco" id="endereco" />
            </div>
            <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea className="form-control" name="descricao" id="descricao"></textarea>
            </div>
            <input className="btn btn-success bg-gradient w-25 mt-2" type="submit" value="Criar" />
        </form>
    )
}

export default ClienteForm