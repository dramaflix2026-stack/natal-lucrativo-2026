import './globals.css';

const marquee = '✦ NATAL 2026  •  PREPARE SUA DIVULGAÇÃO  •  TEMPLATES E MATERIAIS PRONTOS  •  KIT DIGITAL R$ 19,90  ';
export default function Home(){
  return <main>
    <div className="ticker" aria-label="Natal 2026, prepare sua divulgação, kit digital R$ 19,90">
      <div className="ticker-track" aria-hidden="true"><div className="ticker-copy">{marquee.repeat(3)}</div><div className="ticker-copy">{marquee.repeat(3)}</div></div>
    </div>
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Natal Lucrativo 2026">NATAL LUCRATIVO <strong>2026</strong></a>
      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#kit">O Kit</a><a href="#beneficios">Benefícios</a><a href="#duvidas">Dúvidas</a>
      </nav>
      <a className="btn" href="#kit">GARANTIR MEU KIT ↗</a>
    </header>
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="eyebrow">Kit digital para pequenos negócios</div>
        <h1 id="hero-title">Seu negócio merece uma <em>divulgação de Natal</em> que chama atenção.</h1>
        <p>Prepare sua comunicação de fim de ano com templates, sugestões de legendas e mensagens de WhatsApp organizadas em um único kit digital. Mais praticidade para divulgar seus produtos e serviços.</p>
        <div className="offer-row">
          <a href="#kit" className="btn">QUERO MEU KIT ↗</a>
          <div className="price"><small>Oferta de lançamento</small><strong>R$ 19,90</strong></div>
        </div>
        <div className="trust">✦ Material digital para personalizar • Sem promessa de resultados ou vendas garantidas</div>
      </div>
      <div className="hero-visual">
        <div className="photo-wrap">
          <img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Presentes natalinos decorados em um ambiente festivo" loading="eager" />
          <div className="photo-label">Sua campanha de Natal começa aqui ✦</div>
        </div>
        <div className="float-note">✦ NATAL 2026</div>
      </div>
      <div className="hero-bottom" aria-hidden="true"/>
    </section>
    <section id="kit" className="next-anchor"><p><strong>Conheça o kit digital</strong> — próxima seção em desenvolvimento. Checkout ainda não disponível.</p></section>
    <div id="beneficios" aria-hidden="true"/><div id="duvidas" aria-hidden="true"/>
  </main>;
}