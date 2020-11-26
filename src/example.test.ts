const toCapitalizeFirstLetter = (str: string) => {
  const lowerCase = str.toLowerCase();

  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
};

describe('test toCapitalizeFirstLetter', () => {
  test('should return string with capitalized first letter', () => {
    const result = toCapitalizeFirstLetter('proverka');

    expect(result).toBe('Proverka');
  });
});
