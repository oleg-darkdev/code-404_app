const data = {
  title: 'Unauthorized',
  img: '/images/codes/http/400/back_401.svg',
  code: 401,
  complexity: 'base',

  shortDesc: 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided',
  desc: ['The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.', '401 semantically means "unauthenticated", the user does not have valid authentication credentials for the target resource.']
};

export default data;
