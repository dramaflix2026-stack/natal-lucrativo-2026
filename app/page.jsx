import './globals.css';

const marquee = '✦ NATAL 2026  •  PREPARE SUA DIVULGAÇÃO  •  TEMPLATES E MATERIAIS PRONTOS  •  KIT DIGITAL R$ 19,90  ';
const items = [
  {number:'01',title:'Templates para divulgação',description:'Modelos de comunicação natalina para adaptar à identidade do seu negócio.',kind:'template'},
  {number:'02',title:'Sugestões de legendas',description:'Ideias de textos para acompanhar suas publicações e apresentar suas ofertas.',kind:'caption'},
  {number:'03',title:'Mensagens para WhatsApp',description:'Estruturas de mensagens para divulgar novidades e conversar com seus clientes.',kind:'whatsapp'},
  {number:'04',title:'Organização da campanha',description:'Um roteiro prático para planejar sua comunicação durante o período natalino.',kind:'plan'}
];
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
    <section id="kit" className="kit-section" aria-labelledby="kit-title">
      <div className="kit-intro">
        <div className="eyebrow">Tudo em um só lugar</div>
        <h2 id="kit-title">O que você recebe <em>no seu kit?</em></h2>
        <p>Recursos para planejar sua divulgação de Natal com mais clareza, consistência e praticidade — mesmo que você cuide de tudo sozinho.</p>
      </div>
      <div className="kit-layout">
        <div className="kit-showcase" aria-label="Ilustrações conceituais dos tipos de material">
          <div className="kit-photo"><img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Decoração de Natal utilizada como referência visual do kit" loading="lazy" /></div>
          <div className="mockup-card mockup-main">
            <span className="mockup-kicker">EXEMPLO VISUAL • NATAL 2026</span>
            <span className="mockup-star">✦</span>
            <strong>Um Natal<br/>para lembrar.</strong>
            <span className="mockup-rule"/>
            <small>Modelo ilustrativo de divulgação</small>
          </div>
          <div className="mockup-card mockup-note">
            <span className="mockup-kicker">IDEIA DE LEGENDA</span>
            <strong>É tempo de celebrar ✨</strong>
            <p>Uma sugestão de mensagem para apresentar sua campanha.</p>
            <span className="mockup-dots">● ● ●</span>
          </div>
          <div className="mockup-sticker">KIT DIGITAL<br/><strong>R$ 19,90</strong></div>
        </div>
        <div className="kit-details">
          <p className="kit-lead">Materiais pensados para você adaptar e usar na comunicação do seu negócio.</p>
          <div className="kit-items">
            {items.map(item=><article className="kit-item" key={item.number}>
              <span className="kit-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <span className="kit-item-icon" aria-hidden="true">✦</span>
            </article>)}
          </div>
          <a className="btn kit-cta" href="#compra">QUERO ORGANIZAR MEU NATAL ↗</a>
          <p className="kit-disclaimer">As peças mostradas são exemplos ilustrativos da apresentação visual. Os arquivos finais e o checkout ainda estão em preparação.</p>
        </div>
      </div>
    </section>
    <section id="compra" className="next-anchor"><p><strong>Oferta de lançamento: R$ 19,90.</strong> Checkout ainda não disponível — estamos finalizando os materiais digitais.</p></section>
    <div id="beneficios" aria-hidden="true"/><div id="duvidas" aria-hidden="true"/>
  </main>;
}