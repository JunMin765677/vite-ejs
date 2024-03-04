import './assets/scss/all.scss';
// jquery
import * as jquery from "./assets/js/jquery-3.7.1.min";
// bootstrap
import './assets/js/bootstrap.bundle.min';
// Owl Carousel
import './assets/js/owl.carousel';

console.log("Hello world!");

// footer
$(function() {
    $('.footer__item__title').click(function () {
      // 檢查螢幕寬度是否小於1024
      if (window.innerWidth < 1024) {
          var targetList = $(this).next('.footer__item__contents');
  
          if (targetList.hasClass('--close')) {
              // 滑入效果
              targetList.animate({
                  maxHeight: targetList[0].scrollHeight
              }, 300, function() {
                  targetList.removeClass('--close');
              });
          } else {
              // 滑出效果
              targetList.animate({
                  maxHeight: 0
              }, 300, function() {
                  targetList.addClass('--close');
                  // 延遲 1 秒後移除 inline style
                  setTimeout(function() {
                      targetList.removeAttr('style');
                  }, 1000);
              });
          }
  
          $(this).toggleClass('footer__item__title--close');
      }
  });
  
  // nav
  // menu
  $(document).ready(function () {
    const targetList = $('.nav__item__menu'); // 宣告 targetList
    const targetBurgur = $('.nav__item__hamburger');
    const searchForm = $('.nav__item__searchbar__form');//宣告 searchForm
    const searchBtn = $('.nav__item__searchbar__trigger')
  
    function openMenu() {
      closeSearch();
      targetBurgur.addClass('active');
      targetList.css('left', '0');
      $('.overlay').css('display', 'block');
    }
    function closeMenu() {
      if (window.innerWidth < 768) {
        targetBurgur.removeClass('active');
        targetList.css('left', '-280px');
        $('.overlay').css('display', 'none');
    
        setTimeout(function () {
          targetList.removeAttr('style');
        }, 1000);
      }else{
        $('.overlay').css('display', 'none');
      }
      
      
    }

    function openSearch() {
      closeMenu();
      searchBtn.css('opacity','0');
      searchForm.css('display', 'block');
      $('.overlay').css('display', 'block');
    }
    function closeSearch() {
      searchBtn.css('opacity','1');
      searchForm.css('display', 'none');
      $('.overlay').css('display', 'none');
    }
  
    $('.nav__item__hamburger').click(function () {
      if (targetList.css('left') === '-280px') {
        openMenu();
      } else {
        closeMenu();
      }
    });
    $('.nav__item__searchbar__trigger').click(function () {
      if (searchForm.css('display') === 'none') {
        openSearch();
      } else {
        closeSearch();
      }
    });
    $('.overlay').click(function () {
      if (searchForm.css('display') === 'block') {
        closeSearch();
      } else {
        closeMenu();
      }
    });
  });
  
  

  // --------------------- searchbar 跨館搜尋切換清單
  
  // 當 radio 狀態為:checked時的事件處理程序
  $('input[name=Gate]').on('change', function() {
    // 隱藏所有的 select-box
    $('.select-box__type').hide();

    // 獲取選中的 radio 的 name 屬性值
    var radioName = $(this).attr('data-target');

    // 顯示對應的 select-box
    $('.select-box__type[id=' + radioName + ']').show();
  });

  // 初始時觸發一次，確保頁面加載時顯示正確的 select-box
  $('input[name=Gate]:checked').trigger('change');
  
  
  // -------------------- 收藏按鈕
  $('.favoriteBTN').on("click", function(){
    $(this).toggleClass('active');
    
    
  });

  // -------------------- B-Carousel
  $(".B-Carousel.owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    autoplay: true,
    autoplayTimeout: 5500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1000: {
        items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  
  // -------------------- C-texBoard
  $('.C-textBoard__lists.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  // -------------------- U-classification
  $(".U-classification__sortBTN").on("click", function() {
    // 移除所有按鈕的 .active 類
    $(".U-classification__sortBTN").removeClass("active");

    // 添加當前點擊按鈕的 .active 類
    $(this).addClass("active");

    // 隱藏所有的 .U-classification__itemList
    $(".U-classification__itemList").hide();

    // 獲取點擊按鈕的 ID
    var targetId = $(this).attr("data-target");

    // 顯示對應 ID 的 .U-classification__itemList
    $("#" + targetId).show();
  });
  
  
  // ------------------------ G-banners
  // 五個以上
  $(".G-banners__morethan5.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // 四個banner
  $(".G-banners__banners4.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // 三個banner
  $(".G-banners__banners3.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // 二個banner
  $(".G-banners__banners2.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 2 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // 一個banner
  $(".G-banners__abanner.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  
  // K-limitedtimeOffer
  $(".K-limitedtimeOffer__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      670: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // T-setPrice
  $(".T-setPrice__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      670: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // L-itemsRanking
  $(".L-itemsRanking__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // M-itemList
  $(".M-itemList__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // N-freeGift
  $(".N-freeGift__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 2 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // S_brands
  $(".S_brands__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 20, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      380: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // O-articles-activity
  $(".O-articles-activity__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 20, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      568: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      768: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  // Q-articles-items
  $(".Q-articles-items__articles.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      768: {
        items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // 酒款列表
  $(".Q-articles-items__items.owl-carousel").owlCarousel({
    loop: false, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    // autoWidth: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      568: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      768: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1024: {
        items: 2 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  // read more
  $(".Q-articles-items__intro--flip").click(function(){
      $(".Q-articles-items__intro--paragraph.--more").slideToggle("slow");
      $(".readmore").toggle();
      $(".readless").toggle();
    });

  //
  $(document).ready(function () {
    // 遍歷每個 .U-classification__wrap 元素
    $('.U-classification__wrap').each(function () {
        const wrap = $(this);
        const moreItems = wrap.siblings('.U-classification__moreitems');

        // 如果內容有折行，顯示相應的moreitems
        if (wrap[0].scrollHeight > wrap[0].clientHeight) {
            moreItems.show();
        }

        // 監聽窗口大小變化事件，以便在窗口大小改變時重新檢查是否需要顯示moreitems
        $(window).resize(function () {
            if (wrap[0].scrollHeight > wrap[0].clientHeight) {
                moreItems.show();
            } else {
                moreItems.hide();
            }
        });

        // 點擊sort按鈕後刷新
        $('.U-classification__sortBTN').click(function(){
          if (wrap[0].scrollHeight > wrap[0].clientHeight) {
              moreItems.show();
          } else {
              moreItems.hide();
          }
        });
    });
  });
});
