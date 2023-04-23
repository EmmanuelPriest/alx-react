/* Function to get the current year */
function getFullYear() {
  return new Date().getFullYear();
};

/* Function to get the footer copy and takes isIndex as parameter */
function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
};

/* Export the functions */
export { getFullYear, getFooterCopy };
