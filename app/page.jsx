import './globals.css';
import ResilientPhoto from './ResilientPhoto';

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
          <ResilientPhoto src="https://images.pexels.com/photos/6181838/pexels-photo-6181838.jpeg?auto=compress&cs=tinysrgb&w=1100" fallback="/images/natal-hero.svg" alt="Presentes natalinos decorados em um ambiente festivo" loading="eager"/>
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
          <div className="kit-photo"><ResilientPhoto src="https://images.pexels.com/photos/29637478/pexels-photo-29637478.jpeg?auto=compress&cs=tinysrgb&w=900" fallback="/images/natal-vitrine.svg" alt="Decoração de Natal utilizada como referência visual do kit" loading="lazy"/></div>
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
    <section id="compra" className="offer-section" aria-labelledby="offer-title">
      <div className="offer-ornament offer-ornament-left" aria-hidden="true">✦</div>
      <div className="offer-ornament offer-ornament-right" aria-hidden="true">✦</div>
      <div className="offer-heading">
        <span className="eyebrow">Sua campanha começa com organização</span>
        <h2 id="offer-title">Prepare seu Natal <em>com mais praticidade.</em></h2>
        <p>Um kit digital pensado para quem precisa divulgar o próprio negócio sem começar cada material do zero.</p>
      </div>
      <div className="offer-card">
        <div className="offer-card-top"><span className="offer-chip">NATAL LUCRATIVO 2026</span><span className="offer-mark" aria-hidden="true">✦</span></div>
        <h3>Seu kit de divulgação natalina</h3>
        <p className="offer-description">Materiais de apoio para você planejar, adaptar e organizar a comunicação do seu negócio nesta temporada.</p>
        <ul className="offer-includes">
          <li>Templates para divulgação natalina</li>
          <li>Sugestões de legendas para publicações</li>
          <li>Estruturas de mensagens para WhatsApp</li>
          <li>Roteiro para organizar sua campanha</li>
        </ul>
        <div className="offer-divider"/>
        <p className="offer-price-label">PREÇO DO KIT DIGITAL</p>
        <p className="offer-price"><span>R$</span> 19,90</p>
        <p className="offer-price-caption">Pagamento e entrega digital serão habilitados após a configuração do checkout.</p>
        <div className="offer-button-placeholder" role="status">COMPRA EM PREPARAÇÃO <span aria-hidden="true">✦</span></div>
        <p className="offer-disclaimer">O checkout ainda não está disponível. Nenhuma compra ou pagamento é processado nesta página.</p>
      </div>
      <p className="offer-bottom-note">✦ Conteúdo digital para personalização. Não inclui serviços de divulgação nem garante resultados de vendas.</p>
    </section>
    <section id="duvidas" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <div className="faq-visual">
          <div className="faq-photo-frame">
            <ResilientPhoto src="https://images.pexels.com/photos/35002552/pexels-photo-35002552.jpeg?auto=compress&cs=tinysrgb&w=1100" fallback="/images/natal-faq.svg" alt="Árvore de Natal iluminada em ambiente acolhedor" loading="lazy"/>
            <div className="faq-photo-shade" aria-hidden="true"/>
            <div className="faq-photo-caption"><span>✦ NATAL 2026</span><strong>Uma temporada para planejar com carinho.</strong></div>
          </div>
          <div className="faq-visual-tag">✦ KIT DIGITAL</div>
        </div>
        <div className="faq-content">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2 id="faq-title">Tudo o que você precisa <em>saber antes de começar.</em></h2>
          <p className="faq-lead">Respostas claras sobre o conteúdo, o formato e a futura compra do kit.</p>
          <div className="faq-list">
            <details className="faq-item"><summary><span>O que está incluído no Natal Lucrativo 2026?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">A proposta do kit reúne templates para divulgação natalina, sugestões de legendas, estruturas de mensagens para WhatsApp e um roteiro de organização da campanha. Os arquivos finais ainda estão em preparação.</div></details>
            <details className="faq-item"><summary><span>O kit é físico ou digital?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">É um produto exclusivamente digital. Não há envio de presentes, materiais impressos ou produtos físicos.</div></details>
            <details className="faq-item"><summary><span>Posso adaptar os materiais para meu negócio?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">Sim. A proposta é que você personalize os textos e os modelos de comunicação para sua marca, seus produtos, serviços e condições comerciais.</div></details>
            <details className="faq-item"><summary><span>Preciso ter experiência em marketing?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">Não é necessário ser especialista. Os materiais são pensados como ponto de partida para quem organiza a própria divulgação, mas você precisará revisar e adaptar o conteúdo.</div></details>
            <details className="faq-item"><summary><span>Como receberei o kit depois da compra?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">O processo de pagamento e entrega digital ainda está sendo configurado. O método de acesso será informado aqui antes de as vendas serem habilitadas.</div></details>
            <details className="faq-item"><summary><span>Quais são as formas de pagamento e a política de reembolso?</span><span className="faq-toggle" aria-hidden="true">+</span></summary><div className="faq-answer">As formas de pagamento e as condições de reembolso serão apresentadas com clareza antes da abertura do checkout, conforme a legislação aplicável. Nenhum pagamento está sendo aceito nesta página no momento.</div></details>
          </div>
          <p className="faq-note">Ainda estamos finalizando os materiais e a integração de pagamento. Informações comerciais definitivas serão publicadas antes da abertura das vendas.</p>
        </div>
      </div>
    </section>
    <footer className="final-footer" aria-labelledby="footer-title">
      <div className="footer-cta">
        <span className="footer-spark" aria-hidden="true">✦</span>
        <span className="eyebrow">Natal Lucrativo 2026</span>
        <h2 id="footer-title">Sua próxima campanha de Natal <em>pode começar aqui.</em></h2>
        <p>Organize sua divulgação com modelos, ideias de legendas, mensagens e um roteiro prático para adaptar ao seu negócio.</p>
        <div className="footer-action">
          <a href="#compra" className="btn">VER O KIT POR R$ 19,90 ↗</a>
          <span>Compra ainda não disponível. Veja os detalhes da oferta acima.</span>
        </div>
        <div className="footer-decoration" aria-hidden="true">✦ ✧ ✦</div>
      </div>
      <div className="footer-main">
        <div className="footer-brand-area">
          <a href="#inicio" className="footer-brand">NATAL LUCRATIVO <strong>2026</strong></a>
          <p>Materiais digitais para apoiar pequenos negócios na preparação da comunicação de fim de ano.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <span>EXPLORAR</span>
          <a href="#kit">O que vem no kit</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#compra">Oferta e preço</a>
          <a href="#duvidas">Perguntas frequentes</a>
        </nav>
        <div className="footer-info">
          <span>INFORMAÇÕES</span>
          <p>Produto digital em preparação. Pagamento, entrega e informações comerciais serão disponibilizados antes da abertura das vendas.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Natal Lucrativo 2026.</span>
        <span>Sem promessas de vendas ou resultados garantidos.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  </main>;
}