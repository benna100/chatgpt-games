const apiKey = "API_KEY"; // Replace with your actual API key

const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: `Please generate an original interesting random javascript game that can be run in the browser. But you dont have to. 
      
      Output everything in a index.html file using cdns for libraries. Please only answer with the code. No backticks in the beginning or end`,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.choices[0].message.content);
      document
        .querySelector("iframe")
        .setAttribute("srcdoc", data.choices[0].message.content);
    })
    .catch((error) => console.error("Error:", error));
});
