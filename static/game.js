var hash = window.location.hash.slice(1);
var hashtextinit = '😁#####----------------------------------------'.split('');
if (hash == '') {
  window.location.hash += '😁#####----------------------------------------';
}
function gameLoop() {
  hash = window.location.hash
    .slice(1)
    .replace('%F0%9F%98%81', '😁')
    .split('')
    .splice(2, hash.length);
}

setTimeout(gameLoop(), 500);
