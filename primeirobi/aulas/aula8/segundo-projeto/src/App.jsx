import { useState } from 'react'
import './App.css'


export default function App() {

  const [nomeProduto, setNomeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState(0.0);

  const produtoUm = {
    id: 1,
    nome: "Teclado Gamer",
    valor: 149.90
  }
  const produtoDois = {
    id: 2,
    nome: "Monitor Gamer",
    valor: 689.50
  }
  const [listaProdutos, setListaProdutos] = useState([
    produtoUm, produtoDois
  ]);

  return (
    <div>
      <h1>Lista Compras</h1>
      <ul>
          {listaProdutos.map(produto => (
            <li key={produto.id}>
              <p>Nome: {produto.nome}</p>
              <p>Valor: {produto.valor}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}
