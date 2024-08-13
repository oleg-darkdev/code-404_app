//  HTTP codes
import httpCodesList from './data/codes/http';

//  ftp codes
import ftpCodesList from './data/codes/ftp';

// smtp codes
import smtpCodesList from './data/codes/smtp';

//  other data
import navigation from './data/navigation';
import prices from './data/prices';
import partners from './data/partners';
import sponsors from './data/sponsors';
import promoTypesOfCodes from './data/promoTypesOfCodes';

//  utils
import extractLinkAndTitle from './utils/extractLinkAndTitle';
import findCodeById from './utils/findCodeById';
import structureCategoryData from './utils/structureCategoryData';


// ui
import BtnBlackWithArrow from './ui/BtnBlackWithArrow.svelte';



export {ftpCodesList, httpCodesList, smtpCodesList, prices, navigation, structureCategoryData, findCodeById, extractLinkAndTitle, partners, sponsors, BtnBlackWithArrow, promoTypesOfCodes  };
