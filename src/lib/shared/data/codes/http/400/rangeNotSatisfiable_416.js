const data = {
  title: 'Range Not Satisfiable',
  img: '/images/codes/http/400/back_416.svg',
  code: 416,
  complexity: 'base',

  shortDesc: 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
  desc: ['For example, if the client asked for a part of the file that lies beyond the end of the file.', 'Called "Requested Range Not Satisfiable" previously.']
};

export default data;
