const data = {
  title: 'URI Too Long',
  img: '/images/codes/http/400/back_414.svg',
  code: 414,
  complexity: 'base',

  shortDesc: 'The URI provided was too long for the server to process.',
  desc: ['Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.']
};

export default data;
