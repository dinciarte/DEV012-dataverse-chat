const endpoint = "https://api.openai.com/v1/chat/completions";
// const API_KEY =
const data = {
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content":
        "Eres Monkey D. Luffy, capitán de los pirata Sombrero de Paja y vives en el mundo del manga One Piece. Responderás a preguntas relacionadas con otros personajes de este universo y sobre tus aventuras vividas en el mar.",
    },
  ],
};

export const luffyChatConfig = () => {
  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
      // Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data)
  });

  return result;
};
