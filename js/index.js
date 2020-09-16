$(document).ready(function () {
  navbarHover();
  mobilNavbar();
  blogMenu();
});

function navbarHover() {
  var divCount = $(".navbar-btn-group > ul > li").length;

  console.log(divCount);

  var navbarimgsize = 100 / divCount;

  var distanceLeft = navbarimgsize / 2;
  console.log(navbarimgsize);
  console.log(distanceLeft);

  /* navbar img's starting position with js. Line 214 with css in index.css */
  // $(".navbar-btn-group img").css("left", distanceLeft + "%");

  $(".navbar-btn-group ul li:nth-child(2)").hover(
    function () {
      distanceLeft += navbarimgsize;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    },
    function () {
      distanceLeft -= navbarimgsize;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    }
  );
  $(".navbar-btn-group ul li:nth-child(3)").hover(
    function () {
      distanceLeft += navbarimgsize * 2;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    },
    function () {
      distanceLeft -= navbarimgsize * 2;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    }
  );
  $(".navbar-btn-group ul li:nth-child(4)").hover(
    function () {
      distanceLeft += navbarimgsize * 3;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    },
    function () {
      distanceLeft -= navbarimgsize * 3;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    }
  );
  $(".navbar-btn-group ul li:nth-child(5)").hover(
    function () {
      distanceLeft += navbarimgsize * 4;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    },
    function () {
      distanceLeft -= navbarimgsize * 4;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    }
  );
  $(".navbar-btn-group ul li:nth-child(6)").hover(
    function () {
      distanceLeft += navbarimgsize * 5;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    },
    function () {
      distanceLeft -= navbarimgsize * 5;
      $(".navbar-btn-group img").css("left", distanceLeft + "%");
    }
  );
}

function blogMenu() {
  $(".blog-content-head-menu-btn:nth-child(1)").click(function () {
    $(this).addClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(2)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(3)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(4)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(5)").removeClass("blog-btn-after");
  });

  $(".blog-content-head-menu-btn:nth-child(2)").click(function () {
    $(this).addClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(1)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(3)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(4)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(5)").removeClass("blog-btn-after");
  });

  $(".blog-content-head-menu-btn:nth-child(3)").click(function () {
    $(this).addClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(1)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(2)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(4)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(5)").removeClass("blog-btn-after");
  });

  $(".blog-content-head-menu-btn:nth-child(4)").click(function () {
    $(this).addClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(1)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(2)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(3)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(5)").removeClass("blog-btn-after");
  });

  $(".blog-content-head-menu-btn:nth-child(5)").click(function () {
    $(this).addClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(1)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(2)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(4)").removeClass("blog-btn-after");
    $(".blog-content-head-menu-btn:nth-child(4)").removeClass("blog-btn-after");
  });
}

function mobilNavbar() {
  navClick = 0;

  $(".mobil-navbar-btn").click(function () {
    navClick += 1;
    if (navClick % 2 == 1) {
      $(".mobil-navbar").css("transform", "translate(0)");
    } else {
      $(".mobil-navbar").css("transform", "translate(100%)");
    }
  });
}


window.onscroll = function () {
  backtotopScroll()
};

function backtotopScroll() {
  var backtotopBtn = document.getElementById("backtotop");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    backtotopBtn.style.display = "flex";
  } else {
    backtotopBtn.style.display = "none";
  }
}

function backtotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function blogFilter(filterName) {
  var divtoblog = document.getElementsByClassName("blog-content-option");
  if (filterName == "all") {
    filterName = "";
  }
  for (i = 0; i < divtoblog.length; i++) {
    filterHide(divtoblog[i], "filter-blog");
    if (divtoblog[i].className.indexOf(filterName) > -1) {
      filterShow(divtoblog[i], "filter-blog")
    }
  }
}


function filterShow(element, name) {
  var i, classNames, filterClassName;
  classNames = element.className.split(" ");
  filterClassName = name.split(" ")
  for (i = 0; i < filterClassName.length; i++) {
    if (classNames.indexOf(filterClassName[i]) == -1) {
      element.className += " " + filterClassName[i];
    }
  }
}

function filterHide(element, name) {
  var i, classNames, filterClassName;
  classNames = element.className.split(" ");
  filterClassName = name.split(" ")
  console.log(filterClassName)
  for (i = 0; i < filterClassName.length; i++) {
    while (classNames.indexOf(filterClassName[i]) > 1) {
      classNames.splice(classNames.indexOf(filterClassName[i]), 1);
    }
  }
  element.className = classNames.join(" ");
}