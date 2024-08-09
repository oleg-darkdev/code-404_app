import internalServerError_500 from './500/internalServerError_500'
import notImplemented_501 from './500/notImplemented_501'
import badGateway_502 from './500/badGateway_502'
import serviceUnavailable_503 from './500/serviceUnavailable_503'
import gatewayTimeout_504 from './500/gatewayTimeout_504'
import hTTPVersionNotSupported_505 from './500/hTTPVersionNotSupported_505'
import variantAlsoNegotiates_506 from './500/variantAlsoNegotiates_506'
import insufficientStorage_507 from './500/insufficientStorage_507'
import loopDetected_508 from './500/loopDetected_508'
import notExtended_510 from './500/notExtended_510'
import networkAuthenticationRequired_511 from './500/networkAuthenticationRequired_511'

const data = {
  title: '5xx: Server Error codes.',
    brandColour: '#854e13',
  heartClass: 'heart-500',
  shortDesc: 'The server failed to fulfill a request. ',
    link: '/codes/http/5xx',
  logo: '/images/logos/500.svg',
  id: '5xx',

  desc: [
    'Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has encountered an error or is otherwise incapable of performing the request.',
    'Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and indicate whether it is a temporary or permanent condition. Likewise, user agents should display any included entity to the user. These response codes are applicable to any request method.',
  ],
    promo: [
      internalServerError_500,
      hTTPVersionNotSupported_505,
      badGateway_502,
      networkAuthenticationRequired_511,
    ],
    data: [
      internalServerError_500,
      notImplemented_501,
      badGateway_502,
      serviceUnavailable_503,
      gatewayTimeout_504,
      hTTPVersionNotSupported_505,
      variantAlsoNegotiates_506,
      insufficientStorage_507,
      loopDetected_508,
      notExtended_510,
      networkAuthenticationRequired_511,
    ]
  }

export default data;
