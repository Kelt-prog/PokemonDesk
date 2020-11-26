import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const parseFetch = await fetch(uri).then((res) => res.json());

  return parseFetch;
}

export default req;
