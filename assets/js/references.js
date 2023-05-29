/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Filipe Deschamps",
        designation1 : "Fundador/Programador Senior/Analisador de Dados, Filipe, Corp",
        image1 : "https://filipedeschamps.github.io/images/filipe-deschamps-hires.jpg",
        message1 : "Filipe Deschamps é um renomado empreendedor, desenvolvedor e educador brasileiro, conhecido principalmente por seu canal no YouTube. Seus vídeos educacionais sobre tecnologia são extremamente populares, graças à sua abordagem descontraída e didática. Além disso, Filipe é um empreendedor bem-sucedido, fundador de startups de tecnologia. Sua paixão pela programação e sua dedicação em compartilhar conhecimento fizeram dele uma figura influente na comunidade tecnológica do Brasil.",
        

        sl2:2,
        name2 : "Wenes Soares",
        designation2 : "Fundador/Programador Senior/Dono, Crie Seus Jogos", 
        image2: "https://centraldecursosonline.com/wp-content/uploads/2020/11/Wenes-Soares.png",
        message2 : "Wenes Soares é um desenvolvedor de jogos e criador do canal Crie Seus Jogos no YouTube. Com tutoriais e dicas, ele se tornou uma referência no desenvolvimento de jogos, inspirando outros a criarem seus próprios. Wenes continua aprimorando suas habilidades e deixando um legado valioso para a comunidade.",
        
        
    },

    {
        sl1:3,
        name1 : "Steve Jobs",
        designation1 : "Fundador/Programador Senior/Dono, Apple/Pixar/Atari",
        image1 : "https://images.rtl.fr/~c/2000v2000/rtl/www/1073067-steve-jobs-lors-de-la-presentation-du-macbook-air-lors-d-une-keynote-en-2005-archives.jpg",
        message1 : "Steve Jobs foi um visionário empresário e inventor americano, co-fundador da Apple. Ele revolucionou a indústria de tecnologia com produtos inovadores como o iMac, iPod, iPhone e iPad. Sua liderança exigente e perfeccionista transformou a Apple em uma das empresas mais valiosas do mundo. Jobs deixou um legado inspirador que continua a influenciar a indústria de tecnologia até hoje.",
        

        sl2:4,
        name2 : "Elon Musk",
        designation2 : "Fundador/Dono, Space X/Tesla, INC/Neuralink/Paypal/Solar City/Twitter",
        image2 : "https://conteudo.imguol.com.br/c/noticias/8c/2022/11/22/02mai2022---o-bilionario-elon-musk-no-met-gala-em-nova-york-1669125518979_v2_1x1.jpg",
        message2 : "Elon Musk é um empreendedor sul-africano-americano, conhecido por fundar a SpaceX e a Tesla. Sua visão audaciosa e compromisso com a inovação o tornaram uma figura icônica na indústria de tecnologia. Musk continua a desafiar limites e buscar soluções para um futuro sustentável.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://media.discordapp.net/attachments/739132474092945468/1112742609685844048/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://media.discordapp.net/attachments/739132474092945468/1112742609685844048/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
