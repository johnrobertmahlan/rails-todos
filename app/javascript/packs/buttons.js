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
    const btnEl = document.getElementById('newtask');
    const modal = document.getElementById('newtask-mform');
    const delEl = document.getElementById('deletetask');
    const closeModals = document.getElementsByClassName('closemodal');
    for (let i=0; i<closeModals.length; i++) {
      closeModals[i].addEventListener('click', function(evt) {
        console.log(evt);
        evt.target.parentElement.style.display = "none";
      }
      )};
    modal.style.display = "none";
    btnEl.addEventListener('click', function(evt) {
        evt.target.nextElementSibling.style.display = "block"
    })
    delEl.addEventListener('click', function(evt) {
      evt.target.nextElementSibling.style.display = "block"
    });
});