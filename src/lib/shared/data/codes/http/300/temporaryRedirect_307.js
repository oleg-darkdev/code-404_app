const data = {
  title: 'Temporary Redirect',
  img: '/images/codes/http/300/desc_307.svg',
  code: 307,
  complexity: 'base',

  shortDesc: 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI',
  desc: ['In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.']
};

export default data;
