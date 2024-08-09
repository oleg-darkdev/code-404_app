import IntegrityProtectedReply_631 from './600/IntegrityProtectedReply_631.js'
import confidentialityintegrityProtectedReply_632 from './600/confidentialityintegrityProtectedReply_632.js'
import confidentialityProtectedReply_633 from './600/confidentialityProtectedReply_633.js'



const data = {
  title: '6xx: Protected reply codes.',
  brandColour: '',
  heartClass: 'heart-600',
  logo: '/images/logos/600.svg',
  link: '/codes/ftp/6xx',
  id: '6xx',
  shortDesc: 'RFC 2228 introduced the concept of protected replies to increase security over FTP communications.',
  desc: [
    'The 6xx replies are Base64 encoded protected messages that serves as responses to secure commands. When properly decoded, these replies fall into the above categories. ',
  ],
  promo: [
    IntegrityProtectedReply_631,
    confidentialityintegrityProtectedReply_632,
    confidentialityProtectedReply_633,
  ],
  data: [
    IntegrityProtectedReply_631,
    confidentialityintegrityProtectedReply_632,
    confidentialityProtectedReply_633,
    ]
  }

export default data;
