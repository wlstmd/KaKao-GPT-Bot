const scriptName = "GPT";

let key =  "API"; 

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith("/Bot ")) {
      cmd = msg.substr(3);
      replier.reply("[답변] \n" + getResponse(cmd));
  }
}

function getResponse(msg) {
  let result;
  let data = {"model": "gpt-3.5-turbo",
              "messages": [{"role":"user","content": msg}], 
              "temperature":0, 
              "max_tokens":1024,
              "top_p":1, 
              "frequency_penalty": 0.0, 
              "presence_penalty":0.0
              }
  try {
      let response = org.jsoup.Jsoup.connect("https://api.openai.com/v1/chat/completions").
            header("Content-Type", "application/json").
            header("Authorization","Bearer " + key).requestBody(JSON.stringify(data)).
            ignoreContentType(true).ignoreHttpErrors(true).timeout(200000).post()
      result1 = JSON.parse(response.text());
      result = result1.choices[0].message.content; 
  } catch(e) {
      result = e;
  }
  return result;
}