window.postMessage({
  greeting: 'hello there!',
  source: 'my-devtools-extension',
  key: localStorage.getItem('keys_string')
}, '*');