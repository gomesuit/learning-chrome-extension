document.addEventListener('DOMContentLoaded', function() {
  var helloWorldDiv = document.createElement('div');
  helloWorldDiv.innerText = 'Hello World';
  helloWorldDiv.style.position = 'fixed';
  helloWorldDiv.style.top = '10px';
  helloWorldDiv.style.left = '10px';
  helloWorldDiv.style.backgroundColor = 'white';
  helloWorldDiv.style.padding = '10px';
  helloWorldDiv.style.zIndex = '1000';
  document.body.appendChild(helloWorldDiv);
});
