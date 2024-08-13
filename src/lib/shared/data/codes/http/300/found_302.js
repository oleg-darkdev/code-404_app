const data = {
  title: 'Found (Previously "Moved temporarily")',
  img: '/images/codes/http/300/back_302.svg',
  code: 302,
  complexity: 'base',

  shortDesc: 'Tells the client to look at (browse to) another URL',
  desc: ['The HTTP/1.0 specification required the client to perform a temporary redirect with the same method (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 redirects by changing the method to GET. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.']
};

export default data;
