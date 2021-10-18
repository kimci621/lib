import $ from "../modules/core";

$.prototype.get = async function (url, dataTypeAnswer = 'json') {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};


$.prototype.post = async function (url, data, contentType = 'application/json;charset=utf-8') {


  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': contentType
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
  }

  switch (contentType) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }

};