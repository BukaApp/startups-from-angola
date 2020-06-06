// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const companies = [
  {
    description: "O KiandaHub é um espaço de trabalho colaborativo focado no empreendedorismo digital.",
    title: "NEXT - Software, Design e Devs",
    thumb: "https://www.nextbss.co.ao/assets/logo-daa55a71ede311b6e92fc284740e92aeaf6b1fa143e2566c7b8d5da073861b96.png",
    company_id: "GykTLqODQuU"
  },
  {
    description: "Desenvolvelmos SOFTWARES de alta qualidade, transformando os problemas das pessoas no maior...",
    title: "INOKRI - Software, Design e Devs",
    thumb: "http://www.inokri.com/Inokri_files/logo2.png",
    company_id: "HN1UjzRSdBk"
  },
  {
    description: "Preocupamo-nos com o que desenvolvemos, e como nós desenvolvemo-lo, pois o nosso objectivo é satisfazer... ",
    title: "SIMPLUZ - Software, Design e Devs",
    thumb: "http://www.simpluz.com/img/logo.png",
    company_id: "rAzHvYnQ8DY"
  },
  {
    description: "Somos apaixonados por Internet, Inovação, Tecnologia & Comunicação. Achamos que nosso dever é...",
    title: "MwangoBrain - Software, Design e Devs",
    thumb: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    company_id: "ghTrp1x_1As"
  },
  {
    description: "Somos uma empresa de consultoria, desenvolvimento de aplicações e integração de sistemas...",
    title: "Pro It - Software, Design e Devs",
    thumb: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    company_id: "GSqR2i-Pq6o"
  }
];

companies.map(({ description, title, thumb, company_id }) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", company_id);
  cardClone.querySelector("img").src = thumb;
  cardClone.querySelector(".info").innerHTML = description;
  cardClone.querySelector(".title").innerHTML = title;
  sectionCards.appendChild(cardClone);
});

card.remove();