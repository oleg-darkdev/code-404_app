//  FTP codes
import ftpPositivePreliminaryReplyCodes_100 from './positivePreliminaryReplyCodes_100';
import ftpPositiveCompletionReplyCodes_200 from './positiveCompletionReplyCodes_200';
import ftpPositiveIntermediateReplyCodes_300 from './positiveIntermediateReplyCodes_300';
import ftpTransientNegativeCompletionCodes_400 from './transientNegativeCompletionCodes_400';
import ftpServerErrorCodes_500 from './serverErrorCodes_500';
import ftpProtectedReply_600 from './protectedReply_600';


const ftpCodesData = {
  title: 'FTP codes list',
  avatar: '',
  shortDesc: '',
  id: 'ftp',

  link: '/codes/ftp/',
  desc: [``, ``, ``],
  allCodes: [
    ftpPositivePreliminaryReplyCodes_100, ftpPositiveCompletionReplyCodes_200, ftpPositiveIntermediateReplyCodes_300, ftpTransientNegativeCompletionCodes_400, ftpServerErrorCodes_500, ftpProtectedReply_600,
  ],
 }

export default ftpCodesData;
