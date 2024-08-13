//  HTTP codes
import httpInformationalCodes_100 from './httpInformationalCodes_100';
import httpSuccesCodes_200 from './httpSuccesCodes_200';
import httpRedirectionCodes_300 from './httpRedirectionCodes_300';
import httpClientErrorCodes_400 from './httpClientErrorCodes_400';
import httpServerErrorCodes_500 from './httpServerErrorCodes_500';
import httpAwsCodes from './httpAwsCodes';
import httpCloudflareCodes from './httpCloudflareCodes';
import httpNginxCodes from './httpNginxCodes';
import httpObsoletedCodes from './httpObsoletedCodes';
import httpShopifyCodes from './httpShopifyCodes';
import httpMicrosoftISSCodes from './httpMicrosoftISSCodes';
import httpUnofficialCodes from './httpUnofficialCodes';
import httppromoOtherCodes from './httppromoOtherCodes';

const httpCodesData = {
  title: 'HTTP codes list',
  avatar: '',
  shortDesc: '',
  link: '/codes/http/',
  desc: [``, ``, ``],
  id: 'http',

  allCodes: [
    httpInformationalCodes_100,
    httpSuccesCodes_200,
    httpRedirectionCodes_300,
    httpClientErrorCodes_400,
    httpServerErrorCodes_500,
    httpAwsCodes,
    httpCloudflareCodes,
    httpNginxCodes,
    httpObsoletedCodes,
    httpShopifyCodes,
    httpMicrosoftISSCodes,
    httpUnofficialCodes,
    httppromoOtherCodes
  ],
 }

export default httpCodesData;
