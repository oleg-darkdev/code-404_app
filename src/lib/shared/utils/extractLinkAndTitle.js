function extractLinkAndTitle(array) {
  return array.map(obj => {
    return {
      link: obj.link,
      title: obj.title
    };
  });
}


export default extractLinkAndTitle;
