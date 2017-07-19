chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('start: insert clipboard contents into window.PASTE');

  var text = document.createElement('textarea');
  document.body.appendChild(text);
  text.focus();
  document.execCommand('Paste');
  var clipboard = text.value;
  document.body.removeChild(text);

  var s = document.createElement('script');
  s.innerHTML = 'window.PASTE=' + JSON.stringify(clipboard);
  document.body.appendChild(s);

  console.log('finish: insert ' + clipboard.length + ' characters into window.PASTE');
});
