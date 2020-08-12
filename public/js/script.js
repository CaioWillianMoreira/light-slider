window.onload = function() {
  var btLeft = document.querySelector('#bt_left');
  var btRight = document.querySelector('#bt_right');
  var informations = document.querySelector('#informations');
  var img = document.querySelector('#figure_slider');
  var selectImg = document.querySelectorAll('#select_img img');
  var delay = 200;
  var cont = 0;
  var image = [
    "https://wallpaperplay.com/walls/full/e/3/d/43118.jpg",
    "https://images.alphacoders.com/717/thumb-1920-717886.jpg",
    "https://i.pinimg.com/originals/05/72/e9/0572e944ecac357badd0ef4778afea41.jpg"
  ];
  var textInfo = [
    "Duis justo ex per, vis feugiat efficiendi in. Per corpora postulant philosophia at. Pro ea dolor intellegebat",
    "Nam et esse oblique delicatissimi, per ne utamur liberavisse. Quo ad vivendo vituperatoribus, mel ad magna expetenda instructior, ex pro etiam corrumpit interpretaris",
    "Mei verear nonumes ancillae ne, quem purto no sea, vix eu possit alterum. Ei mea autem accusam mediocritatem, nam in hinc malis, nec in quod mundi aliquam."
  ];
  var alt = [
    "Esta é a imagem 1",
    "Este é a imagem 2",
    "Esta é a imagem 3"
  ];
  var title = [
    "titulo 1",
    "titulo 2",
    "titulo 3"
  ];
  function changePicture() {
    img.innerHTML = "<img src='"+image[cont]+"' alt='"+alt[cont]+"' class='fadeIn' title='"+title[cont]+"'>";
  }
  function textInformation() {
    informations.innerHTML = "<h2 class='fadeInSlow'>" + textInfo[cont] + "</h2>";
  }
  function increment() {
    cont ++;
    if(cont > image.length -1) {
      cont = 0;
    }
  }
  function decrement() {
    cont --;
    if(cont < 0){
      cont = image.length -1;
    }
  }
  btLeft.addEventListener('click', function() {
    decrement();
    setTimeout(function(){
      textInformation();
      changePicture();
    }, delay);
  });
  btRight.addEventListener('click', function() {
    increment();
    setTimeout(function(){
      textInformation();
      changePicture();
    }, delay);
  });
  for (var i = 0; i < selectImg.length; i++) {
    selectImg[i].addEventListener('click', function(event){
      increment();
      textInformation();
      var thisIs = event.target;
      img.innerHTML = thisIs.outerHTML;
    });
  }
}
