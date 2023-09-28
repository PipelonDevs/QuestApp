async function sendPostRequest(url: string, data: any) {
  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    return data;
  }).catch((error) => {
    console.log(error);
  });
  return response;
}



const prefix = "http://192.168.1.100:5001";

type genQuestResponse = {
  model_response: string
}
sendPostRequest(`${prefix}/generate-quest`, 
  {
    "prompt": "Stwórz swoje portolio www od podstaw!"
  }
).then((response: genQuestResponse) => console.log(response.model_response));
