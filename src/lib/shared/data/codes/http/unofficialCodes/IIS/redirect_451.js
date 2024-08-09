const data = {
  title: 'Redirect',
  img: '/images/codes/http/iss/deck_iss_40.svg',
  code: 40,
  complexity: 'Microsoft',

  shortDesc: `Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.`,
  desc: ['The client is expected to re-run the HTTP AutoDiscover operation to find a more appropriate server.', 'IIS sometimes uses additional decimal sub-codes for more specific information, however these sub-codes only appear in the response payload and in documentation, not in the place of an actual HTTP status code.']
};

export default data;

