import multipleChoices_300 from './300/multipleChoices_300'
import movedPermanently_301 from './300/movedPermanently_301'
import found_302 from './300/found_302'
import seeOther_303 from './300/seeOther_303'
import notModified_304 from './300/notModified_304'
import useProxy_305 from './300/useProxy_305'
import switchProxy_306 from './300/switchProxy_306'
import temporaryRedirect_307 from './300/temporaryRedirect_307'
import permanentRedirect_308 from './300/permanentRedirect_308'


const data = {
  title: '3xx: Redirection codes.',
    brandColour: '#137590',
  heartClass: 'heart-300',
    link: '/codes/http/3xx',
  logo: '/images/logos/300.svg',
  id: '3xx',

  shortDesc: 'This class of status code indicates the client must take additional action to complete the request.',
  desc: [
    'Many of these status codes are used in URL redirection.',
    'A user agent may carry out the additional action with no user interaction only if the method used in the second request is GET or HEAD. A user agent may automatically redirect a request. A user agent should detect and intervene to prevent cyclical redirects.',
  ],
    promo: [
      multipleChoices_300,
      movedPermanently_301,
      found_302,
      permanentRedirect_308,

    ],
    data: [
      multipleChoices_300,
      movedPermanently_301,
      found_302,
      seeOther_303,
      notModified_304,
      useProxy_305,
      switchProxy_306,
      temporaryRedirect_307,
      permanentRedirect_308
    ]
  }

export default data;
