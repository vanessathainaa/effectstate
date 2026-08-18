import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState('');

  // useEffect: Executa toda vez que a lista de tarefas é modificada.
  useEffect(() => {
    document.title = `Tarefas (${tarefas.length})`
  }, [tarefas]);

  // Função para adicionar tarefas...
  const adicionar = () => {
    if (texto === '') return;
    setTarefas([...tarefas, texto]);
    setTexto('');
  }

  // Função para remover tarefa...
  const remover = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <h2 className="cor"><br />Gerenciador de Tarefas</h2>
        <p className="tar">Total de tarefas: {tarefas.length}</p>
      </div>
      <div>
        <input className="caixa" type="text" placeholder="Digite uma tarefa..." value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button className="bot" type="button" onClick={adicionar} >Adicionar</button>
      </div>
      <ul>
        {tarefas.map((item, index) => (
          <li className="lista">
            {item}
            <button className="bot" type="button" onClick={() => remover(index)}> Remover</button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App;