
var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};



$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    'close'
  ],
  thumbs: {
    autoStart: false
  }
});

const SiteHeader = document.querySelector(".site-header")
const Toggle = document.querySelector(".site-header__menu")
const videosPage = document.querySelector(".videos")


Toggle.addEventListener("click", e => {
  SiteHeader.classList.toggle("site-header--open")
})


if (videosPage) {

  const videos = [
    {
      "id": 0,
      "title": "3ds MAX | 9-Dars - Magnit",
      "src": "https://www.youtube.com/embed/l1D3A2Z14bM"
    },
    {
      "id": 1,
      "title": "3ds MAX | 24-Dars — Merge file",
      "src": "https://www.youtube.com/embed/ai9yAKbSInM"
    },
    {
      "id": 2,
      "title": "3ds MAX | 19-Dars — Layers, Group",
      "src": "https://www.youtube.com/embed/s9ZfMY9oQYE"
    },
    {
      "id": 3,
      "title": "3ds MAX | 20-Dars —  Polygon 1 qism",
      "src": "https://www.youtube.com/embed/jomQhvB3mlw"
    },
    {
      "id": 4,
      "title": "3ds MAX | 22-Dars — Polygon 3 qism",
      "src": "https://www.youtube.com/embed/3xo--SlN-q0"
    },
    {
      "id": 5,
      "title": "3ds MAX | 23-Dars — Polygon 4 qism",
      "src": "https://www.youtube.com/embed/tyBjjTZJNP8"
    },
    {
      "id": 6,
      "title": "3ds MAX | 21-Dars — Polygon 2 qism",
      "src": "https://www.youtube.com/embed/st9uPfjIyPw"
    },
    {
      "id": 7,
      "title": "3ds MAX | 18-Dars — Shapes umumiy",
      "src": "https://www.youtube.com/embed/sFUALjsBTcI"
    },
    {
      "id": 8,
      "title": "3ds MAX | 17-Dars — Proboolen",
      "src": "https://www.youtube.com/embed/aj6_M58Osyg"
    },
    {
      "id": 9,
      "title": "3ds MAX | 16-Dars — Hide, Unhide, Freeze",
      "src": "https://www.youtube.com/embed/UiBZ31KebEc"
    },
    {
      "id": 10,
      "title": "3ds MAX | 15-Dars — Bevel profile",
      "src": "https://www.youtube.com/embed/_hPIx57aj1Q"
    },
    {
      "id": 11,
      "title": "3ds MAX | 14-Dars — Sweep",
      "src": "https://www.youtube.com/embed/3NP3TUOFAWE"
    },
    {
      "id": 12,
      "title": "3ds MAX | 13-Dars — Lineda forma chizish",
      "src": "https://www.youtube.com/embed/cPHBp84qBis"
    },
    {
      "id": 13,
      "title": "3ds MAX | 12-Dars — Shapes 4 qsim",
      "src": "https://www.youtube.com/embed/4ndHzsK3FuI"
    },
    {
      "id": 14,
      "title": "3ds MAX | 11-Dars — Faylni saqlash",
      "src": "https://www.youtube.com/embed/yC60myhY9uk"
    },
    {
      "id": 15,
      "title": "3ds MAX | 10-Dars — Shapes 3 qism",
      "src": "https://www.youtube.com/embed/DvTng_ph17w"
    },
    {
      "id": 16,
      "title": "3ds MAX | 8-Dars — Shapes 2 qism",
      "src": "https://www.youtube.com/embed/iLlwmGT1epI"
    },
    {
      "id": 17,
      "title": "3ds MAX | 7-Dars — Shapes 1 qism",
      "src": "https://www.youtube.com/embed/nHhpUty0l3E"
    },
    {
      "id": 18,
      "title": "3ds MAX | 6-Dars — Standart geometriyalar",
      "src": "https://www.youtube.com/embed/JVtaMKq9xEU"
    },
    {
      "id": 19,
      "title": "3ds MAX | 5-Dars — Copy, Mirror, Align",
      "src": "https://www.youtube.com/embed/MkrPcL8e9hU"
    },
    {
      "id": 20,
      "title": "3ds MAX | 4-Dars — Move, Rotate, Scale",
      "src": "https://www.youtube.com/embed/j1VKMo30GYk"
    },
    {
      "id": 21,
      "title": "3ds MAX | 3-Dars — Undo, Selection",
      "src": "https://www.youtube.com/embed/w0-TeSk8GOA"
    },
    {
      "id": 22,
      "title": "3ds MAX | 2-Dars — Viewport",
      "src": "https://www.youtube.com/embed/6z1sPqZRsPg"
    },
    {
      "id": 23,
      "title": "3ds MAX | 1-Dars — Interfeysni sozlash",
      "src": "https://www.youtube.com/embed/BsXdniVSlm8"
    }
  ]



  const ListVideo = document.querySelector(".main-videos__list")
  const TemplateVideo = document.querySelector(".video-template").content;
  var elVideoFragment = document.createDocumentFragment();

  videos.forEach(video => {

    const NewItem = TemplateVideo.cloneNode(true);
    $_(".main-videos__item-video", NewItem).src = video.src
    $_(".main-videos__item-title", NewItem).textContent = video.title

    elVideoFragment.appendChild(NewItem)

    ListVideo.appendChild(elVideoFragment)

  });

}