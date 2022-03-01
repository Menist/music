let audio;
document.addEventListener('DOMContentLoaded', () => {
  audio.volume = 0.3;
});
//Hide Pause
$('.pause').hide();

initAudio($('.playlist li:first-child'));

function initAudio(element) {
  let song = element.attr('data-song');
  let title = element.text();
  let cover = element.attr('data-cover');
  let artist = element.attr('data-artist');

  //Create audio object
  audio = new Audio('mp3/' + song);

  //Insert audio info
  $('.artist').text(artist);
  $('.title').text(title);

  //Insert song cover
  $('img.cover').attr('src', 'img/ImagesForPlayer/covers/' + cover);

  $('.playlist li').removeClass('active');
  element.addClass('active');
}

//Play button
$('.play').click(function () {
  audio.play();
  $('.play').hide();
  $('.pause').show();
  showDuration();
});

//Pause button
$('.pause').click(function () {
  audio.pause();
  $('.play').show();
  $('.pause').hide();
});

//Stop button
$('.stop').click(function () {
  audio.pause();
  audio.currentTime = 0;
});

//Next button
$('.next').click(function () {
  audio.pause();
  let next = $('.playlist li.active').next();
  if (next.length == 0) {
    next = $('.playlist li:first-child');
  }
  initAudio(next);
  audio.play();
  audio.volume = 0.3;
  showDuration();
});

//Prev button
$('.prev').click(function () {
  audio.pause();
  let prev = $('.playlist li.active').prev();
  if (prev.length == 0) {
    prev = $('.playlist li:last-child');
  }
  initAudio(prev);
  audio.play();
  audio.volume = 0.3;
  showDuration();
});

//Playlist song click
$('.playlist li').click(function () {
  audio.pause();
  initAudio($(this));
  $('.play').hide();
  $('.pause').show();
  audio.play();
  audio.volume = 0.3;
  showDuration();
});

//Volume control

$('.volume').change(function () {
  audio.volume = parseFloat(this.value / 100);
});

//Time/Duration
function showDuration() {
  $(audio).bind('timeupdate', function () {
    //Get hours and minutes
    let s = parseInt(audio.currentTime % 60);
    let m = parseInt(audio.currentTime / 60) % 60;
    if (s < 10) {
      s = '0' + s;
    }
    $('.duration').html(m + ':' + s);
    let value;
    let progress = document.querySelector('.progress');
    progress.onclick = audioRewind;

    function audioRewind() {
      let w = this.offsetWidth;
      let o = event.offsetX;
      this.value = 100 * o / w;
      audio.pause();
      audio.currentTime = audio.duration * (o / w);
      audio.play();
    }

    audio.ontimeupdate = progressUpdate;

    function progressUpdate() {
      let d = audio.duration;
      let c = audio.currentTime;
      progress.value = (100 * c) / d;
    }
  });
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Player 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
let audio1;
document.addEventListener('DOMContentLoaded', () => {
  audio1.volume = 0.3;
});
//Hide Pause
$('.pause1').hide();

initAudio1($('.playlist1 li:first-child'));

function initAudio1(element1) {
  let song1 = element1.attr('data-song1');
  let title1 = element1.text();
  let cover1 = element1.attr('data-cover1');
  let artist1 = element1.attr('data-artist1');

  //Create audio1 object
  audio1 = new Audio('mp3/' + song1);
  //Insert audio1 info
  $('.artist1').text(artist1);
  $('.title1').text(title1);

  //Insert song1 cover1
  $('img.cover1').attr('src', 'img/ImagesForPlayer/covers/' + cover1);

  $('.playlist1 li').removeClass('active');
  element1.addClass('active');
}

//Play button
$('.play1').click(function () {
  audio1.play();
  $('.play1').hide();
  $('.pause1').show();
  showDuration1();
});

//Pause button
$('.pause1').click(function () {
  audio1.pause();
  $('.play1').show();
  $('.pause1').hide();
});

//Stop button
$('.stop1').click(function () {
  audio1.pause();
  audio1.currentTime = 0;
});

//Next button
$('.next1').click(function () {
  audio1.pause();
  let next1 = $('.playlist1 li.active').next();
  if (next1.length == 0) {
    next1 = $('.playlist1 li:first-child');
  }
  initAudio1(next1);
  audio1.play();
  audio1.volume = 0.3;
  showDuration1();
});

//Prev button
$('.prev1').click(function () {
  audio1.pause();
  let prev1 = $('.playlist1 li.active').prev();
  if (prev1.length == 0) {
    prev1 = $('.playlist1 li:last-child');
  }
  initAudio1(prev1);
  audio1.play();
  audio1.volume = 0.3;
  showDuration1();
});

//Playlist1 song click
$('.playlist1 li').click(function () {
  audio1.pause();
  initAudio1($(this));
  $('.play1').hide();
  $('.pause1').show();
  audio1.play();
  audio1.volume = 0.3;
  showDuration1();
});

//Volume control
$('.volume1').change(function () {
  audio1.volume = parseFloat(this.value / 100);
});

//Time/Duration
function showDuration1() {
  $(audio1).bind('timeupdate', function () {
    //Get hours and minutes
    let s1 = parseInt(audio1.currentTime % 60);
    let m1 = parseInt(audio1.currentTime / 60) % 60;
    if (s1 < 10) {
      s1 = '0' + s1;
    }
    $('.duration1').html(m1 + ':' + s1);
    let value = 0;
    let progress1 = document.querySelector('.progress1');
    progress1.onclick = audioRewind1;

    function audioRewind1() {
      let w1 = this.offsetWidth;
      let o1 = event.offsetX;
      this.value = 100 * o1 / w1;
      audio1.pause();
      audio1.currentTime = audio1.duration * (o1 / w1);
      audio1.play();
    }

    audio1.ontimeupdate = progressUpdate1;

    function progressUpdate1() {
      let d1 = audio1.duration;
      let c1 = audio1.currentTime;
      progress1.value = (100 * c1) / d1;
    }
  });
}


//Hide pleer
$('.hide-player').click(function () {
  $(this).toggleClass('.active-hide');
});
