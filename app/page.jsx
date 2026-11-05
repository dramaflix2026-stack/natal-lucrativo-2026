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
    <section id="beneficios" className="benefits-section" aria-labelledby="benefits-title">
      <div className="benefits-heading">
        <div className="eyebrow">Menos improviso, mais organização</div>
        <h2 id="benefits-title">Seu Natal pode começar <em>com um plano.</em></h2>
        <p>Não é preciso montar toda a comunicação do zero. Veja como o kit pode simplificar a preparação da sua campanha.</p>
      </div>
      <div className="comparison" aria-label="Comparação entre preparar a divulgação do zero e com apoio do kit">
        <article className="comparison-panel comparison-before">
          <div className="comparison-label"><span className="comparison-symbol">−</span> SEM UM PLANO</div>
          <h3>Tudo para resolver na última hora.</h3>
          <ul>
            <li>Começar cada publicação com uma página em branco.</li>
            <li>Pensar em textos e mensagens separadamente.</li>
            <li>Organizar ideias e datas em meio à rotina do negócio.</li>
            <li>Ter dificuldade para manter uma comunicação consistente.</li>
          </ul>
          <div className="comparison-foot">Mais decisões para tomar sozinho.</div>
        </article>
        <div className="comparison-arrow" aria-hidden="true">→</div>
        <article className="comparison-panel comparison-after">
          <div className="comparison-label"><span className="comparison-symbol">✦</span> COM O KIT NATAL LUCRATIVO</div>
          <h3>Uma base pronta para adaptar ao seu negócio.</h3>
          <ul>
            <li>Partir de modelos de divulgação natalina.</li>
            <li>Consultar sugestões de legendas e mensagens.</li>
            <li>Usar um roteiro para planejar sua comunicação.</li>
            <li>Personalizar os materiais conforme suas ofertas.</li>
          </ul>
          <div className="comparison-foot">Mais clareza para preparar sua campanha.</div>
        </article>
      </div>
      <div className="benefits-bottom">
        <p>Você continua no controle da sua comunicação. O kit oferece um ponto de partida — não resultados garantidos.</p>
        <a className="btn" href="#compra">CONHECER A OFERTA • R$ 19,90 ↗</a>
      </div>
    </section>
    <section id="como-funciona" className="steps-section" aria-labelledby="steps-title">
      <div className="steps-heading">
        <span className="eyebrow">Simples de colocar em prática</span>
        <h2 id="steps-title">Do planejamento à divulgação, <em>em três passos.</em></h2>
        <p>O kit foi pensado para ajudar você a organizar sua comunicação natalina sem precisar começar tudo do zero.</p>
      </div>
      <div className="steps-track">
        <article className="step-card">
          <div className="step-number" aria-label="Passo 1">01</div>
          <div className="step-icon" aria-hidden="true">✦</div>
          <h3>Acesse os materiais</h3>
          <p>Depois da compra e da liberação do acesso, consulte os modelos, textos e o roteiro de organização do kit.</p>
        </article>
        <article className="step-card">
          <div className="step-number" aria-label="Passo 2">02</div>
          <div className="step-icon" aria-hidden="true">✎</div>
          <h3>Personalize para seu negócio</h3>
          <p>Adapte as sugestões à sua marca, aos seus produtos, às suas condições comerciais e à sua linguagem.</p>
        </article>
        <article className="step-card">
          <div className="step-number" aria-label="Passo 3">03</div>
          <div className="step-icon" aria-hidden="true">↗</div>
          <h3>Organize e divulgue</h3>
          <p>Planeje suas publicações e mensagens, revise as informações e use os materiais nos seus canais.</p>
        </article>
      </div>
      <div className="steps-bottom">
        <div><strong>Seu Natal, do seu jeito.</strong><span>Um ponto de partida para comunicar melhor, sem promessas de vendas garantidas.</span></div>
        <a className="btn" href="#compra">CONHECER O KIT • R$ 19,90 ↗</a>
      </div>
    </section>
    <section id="compra" className="next-anchor"><p><strong>Oferta de lançamento: R$ 19,90.</strong> Checkout ainda não disponível — estamos finalizando os materiais digitais.</p></section>
    <div id="duvidas" aria-hidden="true"/>
  </main>;
}