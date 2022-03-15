{/* <div class="container">
<h2>'Genius is one percent inspiration and ninety-nine percent perspiration.'</h2>
<h3>'Thomas Edison'</h3>
</div> */}

let h2 = document.querySelector(".quote");
let h3 = document.querySelector(".writer");

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });