const data = {
  title: 'Gone',
  img: '/images/codes/http/400/desc_410.svg',
  code: 410,
  complexity: 'base',

  shortDesc: 'Indicates that the resource requested was previously in use but is no longer available and will not be available again.',
  desc: ['This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future.', 'Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.']
};

export default data;
