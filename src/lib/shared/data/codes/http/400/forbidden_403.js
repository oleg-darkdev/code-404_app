const data = {
  title: 'Forbidden',
  img: '/images/codes/http/400/desc_403.svg',
  code: 403,
  complexity: 'base',

  shortDesc: 'The request contained valid data and was understood by the server, but the server is refusing action',
  desc: ['This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).', 'This code is also typically used if the request provided authentication by answering the WWW-Authenticate header field challenge, but the server did not accept that authentication. The request should not be repeated.']
};

export default data;
