interface ArticleProps {
  titulo: string
  autor: string
  data: string
  dataISO: string
  conteudo: string[]
  imagem: string
  imagemAlt: string
  legenda: string
}
 
function Article({
  titulo,
  autor,
  data,
  dataISO,
  conteudo,
  imagem,
  imagemAlt,
  legenda,
}: ArticleProps) {
  return (
    <article className="content">
      <h2>{titulo}</h2>
      <p className="post-meta">
        Por {autor} · <time dateTime={dataISO}>{data}</time>
      </p>
 
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
 
      <figure>
        <img src={imagem} alt={imagemAlt} style={{ width: '100%' }} />
        <figcaption>{legenda}</figcaption>
      </figure>
    </article>
  )
}
 
export default Article