import { getFiles, uploadFile } from "./filesService.js";
import { renderFiles } from "./filesView.js";

export function initFiles() {
  const files = getFiles();
  renderFiles(files);
}

export function handleFileUpload(name) {
  uploadFile(name);
  renderFiles(getFiles());
}
