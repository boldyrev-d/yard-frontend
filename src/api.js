/* eslint-disable import/prefer-default-export */

export function get(query) {
  return fetch(`https://api.jqestate.ru/v1${query}?filter[state]=public`).then(response =>
    response.json(),
  );
}
