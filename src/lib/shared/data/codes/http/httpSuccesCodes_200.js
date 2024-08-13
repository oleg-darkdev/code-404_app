import ok_200 from './200/ok_200.js'
import created_201 from './200/created_201.js'
import accepted_202 from './200/accepted_202.js'
import nonAuthoritative_203 from './200/nonAuthoritative_203.js'
import noContent_204 from './200/noContent_204.js'
import resetContent_205 from './200/resetContent_205.js'
import partialContent_206 from './200/partialContent_206.js'
import multiStatus_207 from './200/multiStatus_207.js'
import alreadyReported_208 from './200/alreadyReported_208.js'
import iMUsed_226 from './200/iMUsed_226.js'


const data = {
  title: '2xx: Success codes.',
  brandColour: '#066047',
  heartClass: 'heart-200',
  logo: '/images/logos/200.svg',
  link: '/codes/http/2xx',
  id: '2xx',

  shortDesc: 'This class of status codes indicates the action requested by the client was received, understood, and accepted.[',
  desc: [
    '',
  ],
  promo: [
      ok_200,
    created_201,
      alreadyReported_208,
    iMUsed_226
  ],
  allCodes: [
    ok_200,
    created_201,
    accepted_202,
    nonAuthoritative_203,
    noContent_204,
    resetContent_205,
    partialContent_206,
    multiStatus_207,
    alreadyReported_208,
    iMUsed_226
    ]
  }

export default data;
