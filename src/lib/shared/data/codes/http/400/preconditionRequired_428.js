const data = {
  title: 'Precondition Required',
  img: '/images/codes/http/400/back_428.svg',
  code: 428,
  complexity: 'base',

  shortDesc: 'The origin server requires the request to be conditional.',
  desc: [`Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.`]
};

export default data;
