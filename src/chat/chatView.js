export function renderMessages(messages) {
  const container = document.getElementById("chat");
  container.innerHTML = "";
  messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = msg.sender === "user" ? "chat-user" : "chat-bot";
    bubble.textContent = msg.text;
    container.appendChild(bubble);
  });
}
