AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Design Visual",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Flipkart",
    time: "(May, 2020 - present)",
    desp: "<li>Nós trabalhamos com designing, ilustração, etc.</li> <li>Nossos sites sempre passam por uma rigorosa sequência de testes para verificar a intuitividade dos nossos sites para com nossos usúarios.",
  },
  {
    title: "Desenvolvedora de tecnológias",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(20 - Feb, 2023)",
    desp: "<li>Além de trabalharmos com desenvolvimento WEB, trabalhamos juntos em projetos com a linguagem C e derivadas.</li><li>Trabalhamos também com JavaScript, Python e MySQL em desenvolvimento WEB.</li><li>Sabemos um pouquinho de cada linguagem de programação usada no mercado atual de desenmvolvimento tecnológico..</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Frontline: New Revolution",
    subtitle: "Criador",
    image: "assets/images/experience-page/uplift.png",
    desp: "Criamos o projeto Frontline: New Revolution, um inovador jogo de tiro multiplayer e singleplayer com uma história grandiosa e envolvente.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Rampage Rush",
    subtitle: "Criador",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Estamos desenvolvendo o Rampage Rush, um jogo de ritmo e hack and slash em terceira pessoa inspirado em Hifi RUSH!. Com jogabilidade frenética e trilha sonora eletrizante, é uma aventura imperdível para fãs de jogos de ação e música. Ansiosos para o lançamento!",
    href: "https://ulhacks.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Leia mais</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
