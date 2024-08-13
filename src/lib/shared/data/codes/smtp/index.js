//  smtp codes
import smtpClientErrorCodes_400 from './smtpClientErrorCodes_400';
import smtpPermanentNegativeCompletion_500 from './smtpPermanentNegativeCompletion_500';
import smtpRedirectionCodes_300 from './smtpRedirectionCodes_300';
import smtpSuccesCodes_200 from './smtpSuccesCodes_200';


const smtpCodesData = {
  title: 'SMTP codes list',
  avatar: '',
  shortDesc: '',
  link: '/codes/smtp/',
  desc: [``, ``, ``],
  id: 'smtp',
  allCodes: [
    smtpSuccesCodes_200,
    smtpRedirectionCodes_300,
    smtpClientErrorCodes_400,
    smtpPermanentNegativeCompletion_500
  ],
 }

export default smtpCodesData;
