import serviceNotAvailable_421 from './400/serviceNotAvailable_421'
import cantOpenDataConnection_425 from './400/cantOpenDataConnection_425'
import connectionClosed_426 from './400/connectionClosed_426'
import invalidUsernameOrPassword_430 from './400/invalidUsernameOrPassword_430'
import needSomeUnavailableResource_431 from './400/needSomeUnavailableResource_431'
import requestedHostUnavailable_434 from './400/requestedHostUnavailable_434'
import requestedFileActionNotTaken_450 from './400/requestedFileActionNotTaken_450'
import requestedActionAborted_451 from './400/requestedActionAborted_451'
import requestedActionNotTaken_452 from './400/requestedActionNotTaken_452'



const data = {
  title: '4xx: Transient Negative Completion reply codes.',
    brandColour: '',
  heartClass: 'heart-400',
  link: '/codes/ftp/4xx',
  logo: '/images/logos/400.svg',
  id: '4xx',
  shortDesc: 'The command was not accepted and the requested action did not take place, but the error condition is temporary and the action may be requested again.',
  desc: [
`The user should return to the beginning of the command sequence, if any. It is difficult to assign a meaning to "transient", particularly when two distinct sites (Server- and User-processes) have to agree on the interpretation. Each reply in the 4xx category might have a slightly different time value, but the intent is that the user-process is encouraged to try again.`,
`A rule of thumb in determining if a reply fits into the 4xx or the 5xx (Permanent Negative) category is that replies are 4xx if the commands can be repeated without any change in command form or in properties of the User or Server (e.g., the command is spelled the same with the same arguments used; the user does not change his file access or user name; the server does not put up a new implementation.) `
  ],
    promo: [
      serviceNotAvailable_421,
      needSomeUnavailableResource_431,
      requestedActionAborted_451,
      requestedActionNotTaken_452,
    ],
    allCodes: [
      serviceNotAvailable_421,
      cantOpenDataConnection_425,
      connectionClosed_426,
      invalidUsernameOrPassword_430,
      needSomeUnavailableResource_431,
      requestedHostUnavailable_434,
      requestedFileActionNotTaken_450,
      requestedActionAborted_451,
      requestedActionNotTaken_452,
    ]
  }

export default data;
