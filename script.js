var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};



$('[data-fancybox="gallery"]').fancybox({
  buttons : [
    'close'
  ],
  thumbs : {
    autoStart : false
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
  {id: 1, title: "1-Dars", src: "https://www.youtube.com/embed/2R89ZT9jSBU"},
  {id: 2, title: "2-Dars", src: "https://www.youtube.com/embed/2R89ZT9jSBU"},
]


const ListVideo = document.querySelector(".main-videos__list")
const TemplateVideo = document.querySelector(".video-template").content;
var elVideoFragment = document.createDocumentFragment();

videos.forEach(video => {

  const NewItem = TemplateVideo.cloneNode(true);
  $_(".main-videos__item-video",NewItem).src = video.src
  $_(".main-videos__item-title",NewItem).src = video.title

  elVideoFragment.appendChild(NewItem)

  ListVideo.appendChild(elVideoFragment)

});

}