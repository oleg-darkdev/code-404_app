import restartMarkerReplay_110 from './100/restartMarkerReplay_110'
import dataConnectionAlreadyOpen_125 from './100/dataConnectionAlreadyOpen_125'
import serviceReadyInMinutes_120 from './100/serviceReadyInMinutes_120'
import fileStatusOkay_150 from './100/fileStatusOkay_150'


const data = {
  title: '1xx: Positive Preliminary reply codes.',
    brandColour: '',
  heartClass: 'heart-dektop',
    link: '/codes/ftp/1xx',
  logo: '/images/logos/100.svg',
id: '1xx',
    shortDesc: 'The requested action is being initiated; expect another reply before proceeding with a new command.',
  desc: [
    `The user-process sending another command before the completion reply would be in violation of protocol; but server-FTP processes should queue any commands that arrive while a preceding command is in progress.`,
    `This type of reply can be used to indicate that the command was accepted and the user-process may now pay attention to the data connections, for implementations where simultaneous monitoring is difficult. The server-FTP process may send at most, one 1xx reply per command. `
  ],


  promo: [
         restartMarkerReplay_110,
      serviceReadyInMinutes_120,
      dataConnectionAlreadyOpen_125,
      fileStatusOkay_150
    ],
    data: [
      restartMarkerReplay_110,
      serviceReadyInMinutes_120,
      dataConnectionAlreadyOpen_125,
      fileStatusOkay_150

    ]
  }

export default data;
