import authenticationExchange_500 from './500/authenticationExchange_500'
import syntaxErrorParametersArguments_501 from './500/syntaxErrorParametersArguments_501'
import commandNotImplemented_502 from './500/commandNotImplemented_502'
import badSequenceCommands_503 from './500/badSequenceCommands_503'
import commandParameter_504 from './500/commandParameter_504'
import serverDoesNotAccept_521 from './500/serverDoesNotAccept_521'
import encryptionNeeded_523 from './500/encryptionNeeded_523'
import authenticationRequired_530 from './500/authenticationRequired_530'
import authenticationMechanismWeak_534 from './500/authenticationMechanismWeak_534'
import authenticationCredentialsInvalid_535 from './500/authenticationCredentialsInvalid_535'

import encryptionRequired_538 from './500/encryptionRequired_538'
import requestedActionNotTaken_550 from './500/requestedActionNotTaken_550'
import userNotLocal_551 from './500/userNotLocal_551'
import requestedMailActionAborted_552 from './500/requestedMailActionAborted_552'
import requestedNotTaken_553 from './500/requestedNotTaken_553'
import transactionHasFailed_554 from './500/transactionHasFailed_554'
import messageTooBig_555 from './500/messageTooBig_555'
import domainDoesNotAcceptMail_556 from './500/domainDoesNotAcceptMail_556'


const data = {
  title: '5yz: Permanent negative completion codes.',
  brandColour: '',
  heartClass: 'heart-500',
  shortDesc: 'The command was not accepted and the requested action did not occur. The SMTP client SHOULD NOT repeat the exact request (in the same sequence).',
  link: '/codes/smtp/5xx',
  logo: '/images/logos/500.svg',
  id: '5xx',
  desc: [
    `Even some "permanent" error conditions can be corrected, so the human user may want to direct the SMTP client to reinitiate the command sequence by direct action at some point in the future.`,
    ``
  ],
  promo: [
    authenticationExchange_500,
    authenticationMechanismWeak_534,
    requestedMailActionAborted_552,
    domainDoesNotAcceptMail_556,
    ],
    data: [
      authenticationExchange_500,
      syntaxErrorParametersArguments_501,
      commandNotImplemented_502,
      badSequenceCommands_503,
      commandParameter_504,
      serverDoesNotAccept_521,
      encryptionNeeded_523,
      authenticationRequired_530,
      authenticationMechanismWeak_534,
      authenticationCredentialsInvalid_535,
      encryptionRequired_538,
      requestedActionNotTaken_550,
      userNotLocal_551,
      requestedMailActionAborted_552,
      requestedNotTaken_553,
      transactionHasFailed_554,
      messageTooBig_555,
      domainDoesNotAcceptMail_556,
    ]
  }

export default data;
