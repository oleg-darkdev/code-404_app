// FTP codes
import ftpProtectedReply_600 from './protectedReply_600';
import ftpTransientNegativeCompletionCodes_400 from './transientNegativeCompletionCodes_400';
import ftpPositiveCompletionReplyCodes_200 from './positiveCompletionReplyCodes_200';
import ftpPositivePreliminaryReplyCodes_100 from './positivePreliminaryReplyCodes_100';
import ftpServerErrorCodes_500 from './serverErrorCodes_500';
import ftpPositiveIntermediateReplyCodes_300 from './positiveIntermediateReplyCodes_300';

const ftpCodesData = {
  title: 'FTP codes list',
  avatar: '',
  shortDesc: '',
  link: '/codes/ftp/',
  desc: [``, ``, ``],
  allCodes: [
    ftpPositivePreliminaryReplyCodes_100, ftpPositiveCompletionReplyCodes_200, ftpPositiveIntermediateReplyCodes_300, ftpTransientNegativeCompletionCodes_400, ftpServerErrorCodes_500, ftpProtectedReply_600,
  ],
  _100: ftpPositivePreliminaryReplyCodes_100,
  _200: ftpPositiveCompletionReplyCodes_200,
  _300: ftpPositiveIntermediateReplyCodes_300,
  _400: ftpTransientNegativeCompletionCodes_400,
  _500: ftpServerErrorCodes_500,
  _600: ftpProtectedReply_600,
 }

export default ftpCodesData;
