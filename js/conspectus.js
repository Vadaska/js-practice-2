function checkAccess(subType) {
  return subType === 'pro' || subType === 'vip';
}

function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring('Hello world', 6));

function getFileName(file) {
  const fileNoEnd = file.indexOf('.');
  if (fileNoEnd > 0) {
    return file.slice(0, fileNoEnd);
  } else {
    return file.slice();
  }
  console.log(getFileName('file.txt`)'));
}
