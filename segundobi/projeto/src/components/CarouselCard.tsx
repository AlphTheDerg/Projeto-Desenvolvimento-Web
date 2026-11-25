import Star from "../assets/icons/star.svg";
import StarOuter from "../assets/icons/starOuter.svg";
import "../styles/testimonials.css";

interface CarouselCardProps {
  foto: string;
  depoimento: string;
  nome: string;
  cargo: string;
}

export function CarouselCard({ foto, depoimento, nome, cargo }: CarouselCardProps) {
  return (
    <div className="carousel-card">
      <img src={foto} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>{depoimento}</p>
      </span>
      <span className="rating">
        <img src={Star} alt="ícone estrela" width={22} height={20} />
        <img src={Star} alt="ícone estrela" width={22} height={20} />
        <img src={Star} alt="ícone estrela" width={22} height={20} />
        <img src={Star} alt="ícone estrela" width={22} height={20} />
        <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
      </span>
      <span className="names">
        <p>{nome}</p>
        <p>{cargo}</p>
      </span>
    </div>
  );
}