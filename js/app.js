'use strict';
let allImgObj = [];
let template = $('#photo-template').clone;

function loadWrapper() {
  $.get('./data/page-1.json' , data => {
    data.forEach( (element) => {
      new Image(element.image_url, element.title, element.description, element.keyword, element.horns);
    });
  }).then(data =>
    data.forEach(element => {
      renderImg(element.image_url, element.title, element.keyword, element.description);
    })).then( () =>
    allImgObj.forEach(element => {
      renderOption(element.keyword);
    }));
}

function Img(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allImgObj.push(this);
}

function renderImg(title, image_url, keyword, description) {
  let temp = template;
  console.log(temp);
  $(temp).children('h2').text(title);
  $(temp).children('img').attr('src', image_url);
  $(temp).children('img').attr('alt', keyword);
  $(temp).children('p').text(description);
}

function renderOption (keyword) {
  $('select').append(`<option>${keyword}</option>`);
}

function filterRender(keyword) {
  $('section').empty();
  allImgObj.forEach(element => {
    if(element.keyword === keyword){
      renderImg(element.image_url, element.title, element.description, element.keyword);
    }
  });
}


function optionChange() {
  filterRender($('option:selected').text());
}

$('select').off();
$('select').on('change', optionChange);

loadWrapper();
