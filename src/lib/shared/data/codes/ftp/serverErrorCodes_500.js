import syntaxErrorInParametersOrArguments_501 from './500/syntaxErrorInParametersOrArguments_501'
import commandNotImplemented_502 from './500/commandNotImplemented_502'
import badSequenceOfCommands_503 from './500/badSequenceOfCommands_503'
import commandNotImplementedForParameter_504 from './500/commandNotImplementedForParameter_504'
import notloggedIn_530 from './500/notloggedIn_530'
import needAccountForStoringFiles_532 from './500/needAccountForStoringFiles_532'
import commandProtectionLevel_533 from './500/commandProtectionLevel_533'
import requestDeniedPolicyReasons_534 from './500/requestDeniedPolicyReasons_534'
import failedSecurityCheck_535 from './500/failedSecurityCheck_535'
import dataProtectionLevel_536 from './500/dataProtectionLevel_536'
import commandProtectionLevelNotSupported_537 from './500/commandProtectionLevelNotSupported_537'
import requestedActionNotTaken_550 from './500/requestedActionNotTaken_550'
import requestedActionAborted_551 from './500/requestedActionAborted_551'
import requestedFileActionAborted_552 from './500/requestedFileActionAborted_552'
import requestedActionNotTaken_553 from './500/requestedActionNotTaken_553'


const data = {
  title: '5xx: Permanent Negative Completion reply codes.',
    brandColour: '',
  heartClass: 'heart-500',
  shortDesc: 'The command was not accepted and the requested action did not take place. The User-process is discouraged from repeating the exact request (in the same sequence).',
  link: '/codes/ftp/5xx',
  logo: '/images/logos/500.svg',
id: '5xx',
  desc: [
    ` Even some "permanent" error conditions can be corrected, so the human user may want to direct his User-process to reinitiate the command sequence by direct action at some point in the future (e.g., after the spelling has been changed, or the user has altered his directory status.)`,
  ],
  promo: [
      syntaxErrorInParametersOrArguments_501,
      requestDeniedPolicyReasons_534,
      requestedFileActionAborted_552,
      requestedActionNotTaken_553,
    ],
    data: [
      syntaxErrorInParametersOrArguments_501,
      commandNotImplemented_502,
      badSequenceOfCommands_503,
      commandNotImplementedForParameter_504,
      notloggedIn_530,
      needAccountForStoringFiles_532,
      commandProtectionLevel_533,
      requestDeniedPolicyReasons_534,
      failedSecurityCheck_535,
      dataProtectionLevel_536,
      commandProtectionLevelNotSupported_537,
      requestedActionNotTaken_550,
      requestedActionAborted_551,
      requestedFileActionAborted_552,
      requestedActionNotTaken_553,
    ]
  }

export default data;
