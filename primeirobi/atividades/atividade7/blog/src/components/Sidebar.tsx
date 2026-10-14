function Sidebar() {
  const postsRelacionados: string[] = ['Praias do Sul', 'Praias do Sudeste', 'Praias do Norte']
 
  return (
    <aside className="menu">
      <h3>Posts Relacionados</h3>
      <ul>
        {postsRelacionados.map((post) => (
          <li key={post}>
            <a href="#">{post}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
 
export default Sidebar