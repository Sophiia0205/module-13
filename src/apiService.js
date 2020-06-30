export default function imgService(text, page = 1) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=12&key=17274962-92ee4aa9cecb3e8e7d78c7a37`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return false;
    }
  });
}
