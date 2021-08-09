// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var btn = document.querySelector('.btn');
    anime.timeline({Integer :1})
    .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeInOutQuart",
    duration: 600,
            
    delay: (el, i) => 70 * (i+1)
    }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutQuart",
    duration: 700,
    offset: '-=875',
        
    delay: (el, i, l) => 80 * (l - i)
    }).add({
    targets: '.ml1',
    opacity: 1,
    duration: 1000,
    easing: "easeInOutQuart",
    delay: 1000,
    });
        


    //submit버튼

    var basicTimeline = anime.timeline({
        autoplay: false
      });
      
      var pathEls = $(".check");
      for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", offset);
      }
      
      basicTimeline
        .add({
          targets: ".text",
          duration: 1,
          opacity: "0"
        })
        .add({
          targets: ".button",
          duration: 1300,
          height: 10,
          width: 300,
          backgroundColor: "#2B2D2F",
          border: "0",
          borderRadius: 100
        })
        .add({
          targets: ".progress-bar",
          duration: 1000,
          width: 300,
          easing: "linear"
        })
        .add({
          targets: ".button",
          width: 0,
          duration: 1
        })
        .add({
          targets: ".progress-bar",
          width: 80,
          height: 80,
          delay: 100,
          duration: 750,
          borderRadius: 80,
          backgroundColor: "#71DFBE"
        })
        .add({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          duration: 200,
          easing: "easeInOutSine"
        });
      
      $(".button").click(function() {
        basicTimeline.play();
      });
      
      $(".text").click(function() {
        basicTimeline.play();
      });




//1.번
      var textWrapper = document.querySelector('.ml5');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1050,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//3.번
anime.timeline({loop: true})
  .add({
    targets: '.ml3 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml3 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml3 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml3 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml3 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });