'use strict';
let allImgObj = [];

$.get('../data/page-1.json', data => {
  console.log(data);
  //todo
});

function Img(imgUrl, title, description, keyword, horns) {
  this.imgUrl = imgUrl;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allImgObj.push(this);
}

