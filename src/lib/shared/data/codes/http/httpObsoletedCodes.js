import responseIsStale_110 from './obsoleted/responseIsStale_110'
import revalidationFailed_111 from './obsoleted/revalidationFailed_111'
import disconnectedOperation_112 from './obsoleted/disconnectedOperation_112'
import heuristicExpiration_113 from './obsoleted/heuristicExpiration_113'
import miscellaneousWarning_199 from './obsoleted/miscellaneousWarning_199'
import transformationApplied_214 from './obsoleted/transformationApplied_214'
import miscellaneousPersistentWarning_299 from './obsoleted/miscellaneousPersistentWarning_299'

const data = {
  title: 'Caching warning codes (obsoleted)',
    brandColour: '#7f2986',
  heartClass: 'heart-dektop',
    link: '/codes/http/obsoleted',
  logo: '/images/logos/obsoleted.svg',
  id: 'obsoleted',

    shortDesc: 'The following caching related warning codes were specified under RFC 7234.',
  desc: [
    `Unlike the other status codes above, these were not sent as the response status in the HTTP protocol, but as part of the "Warning" HTTP header.`, `Since this "Warning" header is often neither sent by servers nor acknowledged by clients, this header and its codes were obsoleted by the HTTP Working Group in 2022 with RFC 9111.`],
    promo: [
      miscellaneousPersistentWarning_299,
      transformationApplied_214,
      miscellaneousWarning_199,
      revalidationFailed_111
    ],
    allCodes: [
      responseIsStale_110,
      revalidationFailed_111,
      disconnectedOperation_112,
      heuristicExpiration_113,
      miscellaneousWarning_199,
      transformationApplied_214,
      miscellaneousPersistentWarning_299,
    ]
  }

export default data;
