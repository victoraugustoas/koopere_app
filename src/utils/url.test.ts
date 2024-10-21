import {UrlBuilder} from './url';

test('should return host https with path segment', () => {
  const url = UrlBuilder.https('swapi.dev').make({pathJoin: ['api']});
  expect(url.str).toBe('https://swapi.dev/api');
});

test('should return url with make', () => {
  const url = UrlBuilder.https('swapi.dev').make({pathJoin: ['api']});
  const people = url.make({pathJoin: ['people', ':id']});
  expect(people.str).toBe('https://swapi.dev/api/people/:id');
});

test('should return url with path params', () => {
  const url = UrlBuilder.https('swapi.dev').make({pathJoin: ['api']});
  const people = url
    .make({pathJoin: ['people', ':id']})
    .withPathParams({':id': 1});
  expect(people.str).toBe('https://swapi.dev/api/people/1');
});

test('should return url with query params', () => {
  const url = UrlBuilder.https('swapi.dev').make({pathJoin: ['api']});
  const people = url.make({pathJoin: ['people']}).withQParams({search: 'r2'});
  expect(people.str).toBe('https://swapi.dev/api/people?search=r2');
});
