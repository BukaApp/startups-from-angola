const container = document.querySelector(".container");
const companies = [{
    name: "BukaApp",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "http://bukaapp.com/",
    alt: "Bukapp"
  },
  {
    name: "Jobartis",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.jobartis.com/",
    alt: "Jobartis"
  },
  {
    name: "Usekamba",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.usekamba.com/",
    url: "Usekamba"
  },
  {
    name: "Deya",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://deyamais.com/",
    alt: "Deya"
  }, {
    name: "Next",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.nextbss.co.ao/",
    alt: "Next"
  }, {
    name: "GreenTech",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.energygreentech.solutions/",
    alt: "GreenTech"
  }, {
    name: "Kubinga",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.kubinga.com/",
    alt: "Kubinga"
  }, {
    name: "Tupuca",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.tupuca.com/en/",
    alt: "Tupuca"
  }, {
    name: "Soba E-store",
    image: "https://www.soba-store.com/wp-content/uploads/2019/06/icon_soba-1.png",
    url: "https://www.soba-store.com/",
    alt: "Soba E-store"
  },
  {
    name: "Menos Fio",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.menosfios.com/",
    alt: "Menos"
  },
  {
    name: "WiConnect",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "http://wiconnect.co/",
    alt: "WiConnect"
  },
  {
    name: "App Saúde",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.appysaude.co.ao/",
    alt: "App Saude"
  },
]
const showCompanies = () => {
  let output = ""
  companies.forEach(
    ({
      name,
      image,
      alt,
      url
    }) =>
    (
      output += `
          <div class="card">
            <img class="card--image" src=${image} alt=${alt}/>
            <h1 class="card--title">${name}</h1>
            <a class="card--link" target="_blank" href=${url}>${name}</a>
          </div>
        `
    )
  )
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCompanies);