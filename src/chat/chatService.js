const messages = [];

export function sendMessage(text) {
  const userMessage = { sender: "user", text };
  const botMessage = { sender: "bot", text: "تم استلام رسالتك: " + text };
  messages.push(userMessage, botMessage);
  return botMessage.text;
}

export function getMessages() {
  return messages;
}
