export default query =>
  fetch(`https://api.jqestate.ru/v1/${query}`).then(response => response.json());
