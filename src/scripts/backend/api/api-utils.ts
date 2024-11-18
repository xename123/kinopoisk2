export function isResponseOk(response: Object) {
  return !(response instanceof Error);
}
