import serviceNotAvailable_421 from './400/serviceNotAvailable_421'
import passwordTransitionNeeded_432 from './400/passwordTransitionNeeded_432'
import requestedMailActionNotTaken_450 from './400/requestedMailActionNotTaken_450'
import requestedActionAborted_451 from './400/requestedActionAborted_451'
import insufficientSystemStorage_452 from './400/insufficientSystemStorage_452'
import temporaryAuthenticationFailure_454 from './400/temporaryAuthenticationFailure_454'
import serverUnableAccommodateParameters_455 from './400/serverUnableAccommodateParameters_455'

const data = {
  title: '4xx: Transient negative completion codes.',
    brandColour: '',
  heartClass: 'heart-400',
  link: '/codes/smtp/4xx',
  logo: '/images/logos/400.svg',
  id: '4xx',
  shortDesc: 'The command was not accepted, and the requested action did not occur. However, the error condition is temporary, and the action may be requested again. ',
  desc: [
    `"Transient Negative" means the error condition is temporary, and the action may be requested again. The sender should return to the beginning of the command sequence (if any).`,
`The accurate meaning of "transient" needs to be agreed upon between the two different sites (receiver- and sender-SMTP agents) must agree on the interpretation. Each reply in this category might have a different time value, but the SMTP client SHOULD try again. `
  ],
    promo: [
      serviceNotAvailable_421,
      passwordTransitionNeeded_432,
      requestedMailActionNotTaken_450,
      serverUnableAccommodateParameters_455,
    ],
    allCodes: [
      serviceNotAvailable_421,
      passwordTransitionNeeded_432,
      requestedMailActionNotTaken_450,
      requestedActionAborted_451,
      insufficientSystemStorage_452,
      temporaryAuthenticationFailure_454,
      serverUnableAccommodateParameters_455,
    ]
  }

export default data;
