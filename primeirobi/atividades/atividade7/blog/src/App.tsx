import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
 
function App() {
  // Dados do post armazenados no App e repassados ao Article via props
  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Autor do Blog',
    data: '31 de Julho de 2026',
    dataISO: '2026-07-31',
    conteudo: [
      'Hoje eu visitei a praia de porto de galinhas, aqui você pode achar várias atrações, muitas comidas da gastronomia local, e fauna e flora, além disso Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi dolore exercitationem iusto. Voluptatibus sed dignissimos et ipsa beatae fugiat delectus veritatis quae excepturi expedita hic tempore assumenda, itaque pariatur.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa libero necessitatibus exercitationem quam ratione perspiciatis praesentium deleniti eligendi debitis, quae similique temporibus in porro assumenda doloribus vitae nisi aperiam numquam.',
    ],
    imagem:
      'https://cdn.sanity.io/images/nxpteyfv/goguides/7f4f464558af7024e28665a0e9195760f0e68b7d-1600x1066.jpg',
    imagemAlt: 'Porto De Galinhas',
    legenda: 'Mar azul na praia do Porto De Galinhas',
  }
 
  return (
    <div className="app">
      <Header titulo="Meu Blog de Viagens" />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        dataISO={post.dataISO}
        conteudo={post.conteudo}
        imagem={post.imagem}
        imagemAlt={post.imagemAlt}
        legenda={post.legenda}
      />
      <Sidebar />
      <Footer />
    </div>
  )
}
 
export default App
