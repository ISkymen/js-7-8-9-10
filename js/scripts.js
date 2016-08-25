"use strict";

$(function () {
  $('.jcarousel').jcarousel({
    wrap: 'circular',
    animation: {
      duration: 800,
      easing: 'linear',
      complete: function () {
      }
    }
  });

  $('.jcarousel-prev').click(function () {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function () {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.tabs').myTabs();
  $('.form').myForm();

});

jQuery.fn.myTabs = function (options) {

  var createTabs = function () {
    var tabs = this;
    var i = 0;

    function showPage(i) {
      $(tabs).find(".tabs__link").click(function (event) {
        event.preventDefault();
      });
      $(tabs).children('div').children('div').hide();
      $(tabs).children('div').children('div').eq(i).show();
      $(tabs).find('.tabs__link').removeClass('active');
      $(tabs).find('.tabs__link').eq(i).addClass('active');
    }

    showPage(0);

    $(tabs).find('.tabs__link').each(function (index, element) {
      $(element).attr('data-page', i);
      i++;
    });

    $(tabs).find('.tabs__link').click(function () {
      showPage(parseInt($(this).attr('data-page')));
    });
  };
  return this.each(createTabs);
};

jQuery.fn.myForm = function (options) {
  var form = this;
  var inputs = $(form).find('input');
  var inputsLenght = inputs.length;
  var i=0;
  var el;
  console.log(inputs.first);
  for (i=0; i<inputsLenght; i++) {
    el = inputs.eq(i);
    var hint = [];
    hint[i] = document.createElement("div");
    $(hint[i])
      .addClass('form__hint')
      .html(el.attr('title'))
      .hide();
    el.after(hint[i]);
    console.log(hint[i]);
    el.hover(
      function() {
        $(this).siblings('.form__hint').eq(0).fadeToggle("linear");
      }
    );


  }



};


