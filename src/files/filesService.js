const files = [];

export function uploadFile(name) {
  const file = { id: Date.now(), name };
  files.push(file);
}

export function getFiles() {
  return files;
}
