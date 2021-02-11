function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
  }
  
  domReady(() => console.log("DOM is ready, come and get it!"));

  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('I now have access to the DOM');
    const btnEl = document.getElementById('newtask');
    btnEl.addEventListener('click', function() {
        alert('CLICKED')
    })
});