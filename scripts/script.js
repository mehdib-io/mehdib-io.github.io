const bg = document.getElementById('cursor--bg');

document.addEventListener('pointermove', (e) => {
  if (window.innerWidth > 820) {
    bg.style.display = 'block';

    bg.animate({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    }, {
      fill: 'forwards'
    });
  }
});

function sendEmail() {
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var mailtoLink = 'mailto:bouydarne.m@icloud.com'
                  + '?subject=' + encodeURIComponent(subject)
                  + '&body=' + encodeURIComponent(message);

  window.location.href = mailtoLink;
}