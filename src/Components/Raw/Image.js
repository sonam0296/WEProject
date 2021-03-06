// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="utf-8" />
//   <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <meta name="theme-color" content="#000000" />
//   <meta name="description" content="Web site created using create-react-app" />
//   <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
//   <!--
//       manifest.json provides metadata used when your web app is installed on a
//       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
//     -->
//   <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

//   <link rel="stylesheet" href="assets/css/style.css" />

//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

//   <!-- Testimonial Link -->

//   <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet" />
//   <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
//     rel="stylesheet" />
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
//   <!--  Carousel Link -->



//   <!--
//       Notice the use of %PUBLIC_URL% in the tags above.
//       It will be replaced with the URL of the `public` folder during the build.
//       Only files inside the `public` folder can be referenced from the HTML.

//       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
//       work correctly both with client-side routing and a non-root public URL.
//       Learn how to configure a non-root public URL by running `npm run build`.
//     -->
//   <title>React App</title>
// </head>

// <body>
//   <noscript>You need to enable JavaScript to run this app.</noscript>
//   <div id="root"></div>
//   <!--
//       This HTML file is a template.
//       If you open it directly in the browser, you will see an empty page.

//       You can add webfonts, meta tags, or analytics to this file.
//       The build step will place the bundled scripts into the <body> tag.

//       To begin the development, run `npm start` or `yarn start`.
//       To create a production bundle, use `npm run build` or `yarn build`.
//     -->
// </body>
// <script src="assets/js/custom.js"></script>
// <!-- Carousel -->
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

// <!-- Testimonials Slider -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
// <!-- <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script> -->
// <!-- <script>
//   $(document).ready(function () {
//     $("#testimonial-slider").owlCarousel({
//       items: 2,
//       itemsDesktop: [1000, 2],
//       itemsDesktopSmall: [980, 1],
//       itemsTablet: [768, 1],
//       pagination: true,
//       navigation: false,
//       navigationText: ["", ""],
//       autoPlay: true
//     });
//   });
// </script> -->
// <script>
//   $(document).ready(function () {

//     $('.owl-carousel').owlCarousel({
//       mouseDrag: false,
//       loop: true,
//       margin: 2,
//       nav: true,
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 1
//         },
//         1000: {
//           items: 3
//         }
//       }
//     });

//     $('.owl-prev').click(function () {
//       $active = $('.owl-item .item.show');
//       $('.owl-item .item.show').removeClass('show');
//       $('.owl-item .item').removeClass('next');
//       $('.owl-item .item').removeClass('prev');
//       $active.addClass('next');
//       if ($active.is('.first')) {
//         $('.owl-item .last').addClass('show');
//         $('.first').addClass('next');
//         $('.owl-item .last').parent().prev().children('.item').addClass('prev');
//       }
//       else {
//         $active.parent().prev().children('.item').addClass('show');
//         if ($active.parent().prev().children('.item').is('.first')) {
//           $('.owl-item .last').addClass('prev');
//         }
//         else {
//           $('.owl-item .show').parent().prev().children('.item').addClass('prev');
//         }
//       }
//     });

//     $('.owl-next').click(function () {
//       $active = $('.owl-item .item.show');
//       $('.owl-item .item.show').removeClass('show');
//       $('.owl-item .item').removeClass('next');
//       $('.owl-item .item').removeClass('prev');
//       $active.addClass('prev');
//       if ($active.is('.last')) {
//         $('.owl-item .first').addClass('show');
//         $('.owl-item .first').parent().next().children('.item').addClass('prev');
//       }
//       else {
//         $active.parent().next().children('.item').addClass('show');
//         if ($active.parent().next().children('.item').is('.last')) {
//           $('.owl-item .first').addClass('next');
//         }
//         else {
//           $('.owl-item .show').parent().next().children('.item').addClass('next');
//         }
//       }
//     });

//   });
// </script>

// <!-- 
//     control slider
//    -->

// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//   integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />

// <!--  -->

// <script>
//   $('.slideNext').click(function () {
//     $('.slideBox').animate({
//       left: '-=150px'
//     }, 500);
//   });
// </script>
// <!-- portfolio carousel -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.1.1/js/mdb.min.js"
//   integrity="sha512-3yGteaiMnpsxSo0LHYMpODezVs6NjMZ6vFyRoqQK4WcRhacpMCgUsQ4yfu5GtcMoWf2zjDP5ENtmx1+eCCtKXw=="
//   crossorigin="anonymous"></script>

// </html>