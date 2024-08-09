import webServerReturnedUnknownError_520 from './unofficialCodes/cloudflare/webServerReturnedUnknownError_520'
import webServerDown_521 from './unofficialCodes/cloudflare/webServerDown_521'
import connectionTimedOut_522 from './unofficialCodes/cloudflare/connectionTimedOut_522'
import originIsUnreachable_523 from './unofficialCodes/cloudflare/originIsUnreachable_523'
import timeoutOccurred_524 from './unofficialCodes/cloudflare/timeoutOccurred_524'
import sllHandshakeFailed_525 from './unofficialCodes/cloudflare/sllHandshakeFailed_525'
import invalidSSLCertificate_526 from './unofficialCodes/cloudflare/invalidSSLCertificate_526'
import railgunError_527 from './unofficialCodes/cloudflare/railgunError_527'
import error_530 from './unofficialCodes/cloudflare/error_530'


const data = {
  title: 'Cloudflare codes.',
    brandColour: '#7f2986',
  heartClass: 'heart-dektop',
    link: '/codes/http/cloudflare',
  logo: '/images/logos/cloudflare.svg',
  id: 'cloudflare',

    shortDesc: `Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.`,
  desc: [
    ``, ``
  ],
  promo: [
    webServerReturnedUnknownError_520,
    timeoutOccurred_524,
      invalidSSLCertificate_526,
      error_530,
    ],
    data: [
      webServerReturnedUnknownError_520,
      webServerDown_521,
      connectionTimedOut_522,
      originIsUnreachable_523,
      timeoutOccurred_524,
      sllHandshakeFailed_525,
      invalidSSLCertificate_526,
      railgunError_527,
      error_530,
    ]
  }

export default data;
