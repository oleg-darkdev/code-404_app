import continue_100 from './100/continue_100'
import processing_102 from './100/processing_102'
import switching_101 from './100/switching_101'


const data = {
  title: '1xx: Informational codes.',
    brandColour: '#7f2986',
  heartClass: 'heart-dektop',
    link: '/codes/http/1xx',
  logo: '/images/logos/100.svg',
  id: '1xx',

    shortDesc: 'An informational response indicates that the request was received and understood.',
  desc: [
    'It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response.',
    'The message consists only of the status line and optional header fields, and is terminated by an empty line. As the HTTP/1.0 standard did not define any 1xx status codes, servers must not send a 1xx response to an HTTP/1.0 compliant client except under experimental conditions.',
  ],


    promo: [
      continue_100,
      switching_101,
      processing_102,
    ],
    data: [
      continue_100,
      switching_101,
      processing_102,
    ]
  }

export default data;
