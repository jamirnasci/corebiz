const FuncionarioForm = () => {
    return (
        <form method="POST" action="">
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
            <div className="row">
                <div className="col">
                    <label htmlFor="cargo">Cargo</label>
                    <select className="form-select form-select-sm" name="cargo" id="cargo" required>
                        <option value="vendedor">Vendedor</option>
                        <option value="porteiro">Porteiro</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="senha">Senha</label>
                    <input className="form-control" type="password" name="senha" id="senha" required />
                </div>
                <div className="col">
                    <label htmlFor="acesso">Acesso</label>
                    <select className="form-select form-select-sm" name="acesso" id="acesso" required >
                        <option value="adm">Adiministrador</option>
                        <option value="func">Funcionário</option>
                    </select>
                </div>
            </div>
            <input className="btn btn-success bg-gradient w-25 mt-2" type="submit" value="Criar" />
        </form>
    )
}

export default FuncionarioForm