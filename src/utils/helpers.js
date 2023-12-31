
export const isSuperAdmin = (admin) => {
  return admin.verified;
};

export const pluralizeWord = (item, word) => {
  if (+item === 1) {
    return `1${word}`;
  }
  if (+item > 1) {
    return `${item}${word}s`;
  }
};

export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};
