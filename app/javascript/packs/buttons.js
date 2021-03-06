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
    const closeDeleteModals = document.getElementsByClassName('closedelete');
    const modal = document.getElementById('newtask-mform');
    const delEl = document.getElementsByClassName('deletetask');
    const showEl = document.getElementsByClassName('showtask');
    const closeModals = document.getElementsByClassName('closemodal');
    for (let i=0; i<closeDeleteModals.length; i++) {
      closeDeleteModals[i].addEventListener('click', function(evt) {
        console.log(evt);
        evt.target.offsetParent.style.display = "none";
      })
    }
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
    for (let i=0; i<delEl.length; i++) {
      delEl[i].addEventListener('click', function(evt) {
        console.log(evt);
        evt.target.nextElementSibling.style.display = "block"
      });
    }
    for (let i=0; i<showEl.length; i++) {
      showEl[i].addEventListener('click', function(evt) {
        console.log(evt);
        evt.target.nextElementSibling.style.display = "block"
      });
    };
});