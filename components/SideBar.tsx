import style from '@/styles/components/sidebar.module.css'

const SideBar = () => {
    return (
        <div className="position-fixed start-0 bg-primary bg-gradient h-100" style={{ width: '250px' }}>
            <div className="">
                <h1 className="text-light p-2">App Title</h1>
                <div className="d-flex flex-column">
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#funcionariosAccordionBody" aria-expanded="true" aria-controls="collapseOne">
                                    Funcionários
                                </button>
                            </h2>
                            <div id="funcionariosAccordionBody" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-darkblue">
                                    <a href='/funcionarios/cadastro' className={style.sideBarLink}>Cadastro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-flush" id="accordionClientes">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button text-light bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#accordionClientesBody" aria-expanded="true" aria-controls="collapseOne">
                                    Clientes
                                </button>
                            </h2>
                            <div id="accordionClientesBody" className="accordion-collapse collapse" data-bs-parent="#accordionClientes">
                                <div className="accordion-body bg-darkblue">
                                    <a href='/clientes/cadastro' className={style.sideBarLink}>Cadastro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-flush" id="accordionVendas">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#accordionVendasBody" aria-expanded="true" aria-controls="collapseOne">
                                    Vendas
                                </button>
                            </h2>
                            <div id="accordionVendasBody" className="accordion-collapse collapse" data-bs-parent="#accordionVendas">
                                <div className="accordion-body bg-darkblue">
                                    <a href='/vendas/cadastro' className={style.sideBarLink}>Cadastro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-flush" id="accordionProdutos">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProdutosBody" aria-expanded="true" aria-controls="collapseOne">
                                    Produtos
                                </button>
                            </h2>
                            <div id="accordionProdutosBody" className="accordion-collapse collapse" data-bs-parent="#accordionProdutos">
                                <div className="accordion-body bg-darkblue">
                                    <a href='/produtos/cadastro' className={style.sideBarLink}>Cadastro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar