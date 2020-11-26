import getUrlWithParamsConfig from './getUrlWithParamConfig';

describe('test getUrlWithParamConfig', () => {
  test('should recieve 2 arguments "getPokemons" and empty object. Should return object with properties value, protocol, host and query', () => {
    const result = getUrlWithParamsConfig('getPokemons', {});

    expect(result).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('should recieve 2 arguments "getPokemons" and {name: "Pikachu"}. Should return object with properties value, protocol, host and query', () => {
    const result = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(result).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('should recieve 2 arguments "getPokemons" and {id: 25}. Should return object with properties value, protocol, host and query', () => {
    const result = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(result).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
