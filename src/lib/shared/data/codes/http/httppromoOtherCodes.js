import httpAwsCodes from './httpAwsCodes'
// import httpCloudflareCodes from './httpCloudflareCodes'
import httpShopifyCodes from './httpShopifyCodes'
import httpMicrosoftISSCodes from './httpMicrosoftISSCodes'
import httpNginxCodes from './httpNginxCodes'



const data = {
  title: 'Codes provided by various web services.',
  brandColour: '#7f2986',
  heartClass: 'heart-dektop',
  link: `/codes/http/others`,
    logo: '/images/logos/promo.svg',
  id: 'others',

  shortDesc: `NGINX, Cloudflare, Apache Web Server, Amazon Web Services, Microsoft's Internet Information Services (IIS) web server`,
  desc: [
    ``, ``
  ],
    promo: [
      httpShopifyCodes.promo[0],
      httpAwsCodes.promo[0],
      httpMicrosoftISSCodes.promo[0],
      httpNginxCodes.promo[0],
    ],
    allCodes: [

    ]
  }

export default data;
