import { sendMessage, getMessages } from "./chatService.js";
import { renderMessages } from "./chatView.js";

export function initChat() {
  const messages = getMessages();
  renderMessages(messages);
}

export function handleUserInput(input) {
  const reply = sendMessage(input);
  renderMessages(getMessages());
  return reply;
}
