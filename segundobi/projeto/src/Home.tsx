import "./styles/utility.css";
import "./styles/header.css";
import Logo from "./assets/icons/logo.svg";
import Menu from "./assets/icons/menu.svg";
import Close from "./assets/icons/close.svg";
import Book from "./assets/icons/book.svg"
import Speed from "./assets/icons/speed.svg"
import Savings from "./assets/icons/savings.svg"
import { useEffect, useState } from "react";
import Button from "./components/Button";
import HeroRectangleOne from "./assets/images/rectangleOne.png";
import HeroRectangleTwo from "./assets/images/rectangleTwo.png";
import "./styles/hero.css";
import "./styles/solution.css";
import ProfileImageOne from "./assets/images/professora.jpg";
import Star from "./assets/icons/star.svg";
import StarOuter from "./assets/icons/starOuter.svg";
import "./styles/testimonials.css"
import { CarouselCard } from "./components/CarouselCard";
import Check from "./assets/icons/check.svg";
import "./styles/pricing.css";
import "./styles/contact.css";
import instagram from "./assets/icons/instagram.svg";
import facebook from "./assets/icons/facebook.svg";
import youtube from "./assets/icons/youtube.svg";
import "./styles/footer.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo PaginaPorMes" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a
                                    href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo Dois - Imagem abstrata" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo Um - Imagem abstrata" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>
                        Uma inscrição que te entrega livros todo o mês
                    </h1>
                    <p>
                        Já pensou em receber livros do seu gosto todo o mês? O melhor da literatura, com seleção baseada no seu gosto, bora entrar no clube.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Literatura é com a gente! A <strong>Página por Mês</strong> já conquistou diversos
                        clientes, seja você mais um deles, veja tudo que pode ganhar com
                        nossas inscrições.
                    </p>
                </header>

                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Book} alt="Ícone de livro" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Livros de qualidade</h3>
                            <p>Nós selecionamos livros da melhores editoras, com atenção a sua qualidade,
                                edições especiais, como com comentários de escritor ou editora, e muito mais.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Speed} alt="Ícone de velocidade" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Entrega Rápida</h3>
                            <p>Nos comprometemos a realizar entregas mais rápidas o possível cada mês, com nossas
                                parcerias com livrarias e centros de distruibuição perto de você.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Savings} alt="Ícone de cofrinho de porco" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Economize com seu plano</h3>
                            <p>Nós oferecemos planos de inscrição com base na quantidade de livros que você quiser receber,
                                economizando quando se quer ler apenas um livro por mês.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já sabe dá qualidade de nossos livros mensais,
                        acompanhe abaixo os testemunhos de nossos leitores quer já entraram pro clube e aprovaram.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <CarouselCard
                            foto={ProfileImageOne}
                            depoimento="A inscrição tem muitos livros de meus gosto, entregas rápidas, e me ajudou muito com material para aulas!"
                            nome="Maria Oliveira"
                            cargo="PROFESSORA DE LITERATURA"
                        />
                    </div>
                    <div className="carousel-content">
                        <CarouselCard
                            foto={ProfileImageOne}
                            depoimento="A inscrição tem muitos livros de meus gosto, entregas rápidas, e me ajudou muito com material para aulas!"
                            nome="Maria Oliveira"
                            cargo="PROFESSORA DE LITERATURA"
                        />
                    </div>
                    <div className="carousel-content">
                        <CarouselCard
                            foto={ProfileImageOne}
                            depoimento="A inscrição tem muitos livros de meus gosto, entregas rápidas, e me ajudou muito com material para aulas!"
                            nome="Maria Oliveira"
                            cargo="PROFESSORA DE LITERATURA"
                        />
                    </div>
                    <div className="carousel-content">
                        <CarouselCard
                            foto={ProfileImageOne}
                            depoimento="A inscrição tem muitos livros de meus gosto, entregas rápidas, e me ajudou muito com material para aulas!"
                            nome="Maria Oliveira"
                            cargo="PROFESSORA DE LITERATURA"
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Para aqueles com amor por leitura mas que engajam com um livro por vez!</p>
                        </span>
                        <h2 className="price">R$ 30,90</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Podem ser retirados imediatamente em uma de nossas livrarias parceiras</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>1 livro por mês</p>
                            </li>
                        </ul>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem tem sede por leitura!</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Entregues direto na sua casa!</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>3 livros por entrega</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Items bônus relacionados a seus livros junto na caixa</p>
                        </span>
                    </div>
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <span>
                        <h2>Envie sua dúvida</h2>
                        <span className="desktop-only">
                            <h2>Entre em contato</h2>
                        </span>
                    </span>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,seja um orçamento, uma dúvida técnica de algum de nossos produtos.Estamos à disposição para responder.
                    </p>
                </header>

                <form action="">
                    <label htmlFor="email"></label>
                    <input type="text" id="email" name="email" placeholder="Seu melhor email" required />

                    <label htmlFor="motive"></label>
                    <input type="text" id="motive" name="motive" placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" required />

                    <Button text="Enviar" />
                </form>
            </section>

            <footer id="footer">
                <div className="container footer-content">
                    <div className="footer-column">
                        <h3>LogoMarca</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><img src={instagram} alt="" /></a>
                            <a href="#" aria-label="Facebook"><img src={facebook} alt="" /></a>
                            <a href="#" aria-label="YouTube"><img src={youtube} alt="" /></a>
                        </div>
                    </div>
                

                <nav className="footer-column" aria-label="Empresa">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Faça parte do time</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>

                <nav className="footer-column" aria-label="Recursos">
                    <h3>Recursos</h3>
                    <ul>
                        <li><a href="#">IOS & Android</a></li>
                        <li><a href="#">Teste a Demo</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </nav>
                </div>

                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web 💙 ©2026 Igor Augusto - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}