function Messages(){
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Coluna esquerda: lista de conversas */}
        <div className="col-md-4 border-end p-3 overflow-auto">
          <h5>Mensagens</h5>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              João: Oi, tudo bem?
            </li>
            <li className="list-group-item list-group-item-action">
              Maria: Vamos marcar algo?
            </li>
          </ul>
        </div>

        {/* Coluna direita: área do chat */}
        <div className="col-md-8 p-3 d-flex flex-column">
          <h5>Conversando com João</h5>
          <div className="flex-grow-1 overflow-auto border p-3 mb-3">
            <div className="mb-2 text-start">
              <span className="badge bg-secondary">João</span>
              <div>Oi, tudo bem?</div>
            </div>
            <div className="mb-2 text-end">
              <span className="badge bg-secondary">Você</span>
              <div>Tudo sim, e você?</div>
            </div>
          </div>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Digite uma mensagem..."
                disabled
              />
              <button className="btn btn-primary" type="submit" disabled>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Messages;