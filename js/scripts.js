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

  //jQuery menu
  $(function() {
    $('.menu_item').hover(
      function() {
        $(this).children('.submenu').stop(true, true).slideDown();
      },
      function() {
        $(this).children('.submenu').stop(true, true).slideUp();
      }
    );

    $('.submenu_item').hover(
      function() {
        $(this).children('.submenu').stop(true, true).fadeIn();
      },
      function() {
        $(this).children('.submenu').stop(true, true).fadeOut();
      }
    );
  });

  $(".jcarousel-nav").click(function (event) {
    event.preventDefault();
  });

  $('.jcarousel-prev').click(function () {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function () {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.tabs').myTabs();
  $('.form').myForm();
  $(".my-select").select2();

  //iCheck

    $('.checkboxes input').iCheck({
      checkboxClass: 'icheckbox_square-red',
      radioClass: 'iradio_square-red',
      increaseArea: '20%'
    });


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
  for (i=0; i<inputsLenght; i++) {
    el = inputs.eq(i);
    var hint = [];
    hint[i] = document.createElement("div");
    $(hint[i])
      .addClass('form__hint')
      .html(el.attr('title'))
      .hide();
    el.after(hint[i]);
    el.hover(
      function() {
        $(this).siblings('.form__hint').eq(0).fadeToggle("linear");
      }

    );
    el.focusin(
      function() {
        $(this).siblings('.form__hint').eq(0).show("linear");
      }

    );

    el.focusout(
      function() {
        $(this).siblings('.form__hint').eq(0).hide("linear");
      }

    );




  }



};




