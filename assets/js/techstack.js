AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>HyperText Markup Language, or HTML, is the standard markup language for documents designed to be displayed in a web browser.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used to describe the presentation of a document written in a markup language such as HTML.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is a general-purpose, high-level interpreted programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes. We mainly use it to develop our games!</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes to any set of files, often used to coordinate work between programmers who collaboratively develop source code during software development.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
