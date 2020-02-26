const container = document.querySelector(".container");
const companies = [{
    name: "BukaApp",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "http://bukaapp.com/",
    alt: "Bukapp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Jobartis",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.jobartis.com/",
    alt: "Jobartis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Usekamba",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.usekamba.com/",
    url: "Usekamba",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Deya",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://deyamais.com/",
    alt: "Deya",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    name: "Next",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.nextbss.co.ao/",
    alt: "Next",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    name: "GreenTech",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.energygreentech.solutions/",
    alt: "GreenTech",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    name: "Kubinga",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.kubinga.com/",
    alt: "Kubinga",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    name: "Tupuca",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.tupuca.com/en/",
    alt: "Tupuca",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    name: "Soba E-store",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.soba-store.com/",
    alt: "Soba E-store",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Menos Fio",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.menosfios.com/",
    alt: "Menos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "WiConnect",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "http://wiconnect.co/",
    alt: "WiConnect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "App Saúde",
    image: "https://s3-sa-east-1.amazonaws.com/kamba-images/SEO/NewImageAppSEO.png",
    url: "https://www.appysaude.co.ao/",
    alt: "App Saude",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]
const showCompanies = () => {
  let output = ""
  companies.forEach(
    ({
      name,
      image,
      alt,
      url,
      description
    }) =>
    (
      output += `
        <div>
          <ul>
            <li>
              <img src=${image} alt=${alt}/>
              <footer>
                <strong>${name}</strong>
                <p>${description}</p>
              </footer>
              <div class="link-button">
                <a href=${url} target="_blank">Saber mais</a>
              </div>
            </li>
            </ul>
          </div>
        `
    )
  )
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCompanies);