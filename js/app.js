'use strict';
let allImgObj = [];
let template = $('#photo-template').clone;

$.get('../data/page-1.json').done((data) => {
  data.forEach(element => {
    new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
  });
  renderImg();
});

function Img(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allImgObj.push(this);
}

function renderImg() {
  for (let element of allImgObj) {
    // let temp = template.html();
    // $('main').append('<div class=\'pics\'></div>');
    // $(temp).appendTo('div');
    let temp = template;
    console.log(temp);
    $(temp).children('h2').text(element.title);
    $(temp).children('img').attr('src', element.image_url);
    $(temp).children('img').attr('alt', element.keyword);
    $(temp).children('p').text(element.description);
    // $('main').append(temp);
    console.log('hello');
  }
}
