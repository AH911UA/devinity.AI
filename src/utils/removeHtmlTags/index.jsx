const removeHtmlTags = (inputString) => {
  return inputString.replace(/<[^>]*>/g, '');
}

export default removeHtmlTags
