function stringManipulations(str) {
  const reversed = str.split('').reverse().join('');
  const characterCount = str.length;
  const capitalized = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    reversed: reversed,
    characterCount: characterCount,
    capitalized: capitalized
  };
}