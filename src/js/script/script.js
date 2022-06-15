const $ = require('jquery');

// $(document).ready(() => {
//   generateBinary();
//   setInterval(updateBinary, 5);
//   function generateBinary() {
//     let str = '';
//     for (var i = 0; i < 3500; i++) {
//       if (i % 100 === 0) {
//         str += '\n';
//       } else {
//         str += Math.round(Math.random());
//       }
//     }
//     $('.background').html(str);
//     console.log('Background width: ', $('.background').width());
//   }
//   function updateBinary() {
//     let str = $('.background').html();
//     let n = str.length;
//     const idx = () => {
//       let r = Math.floor(Math.random() * n + 1);
//       if (r % 100 === 0) return idx();
//       else return r;
//     };

//     $('.background').html(
//       str.substring(0, idx()) +
//         Math.floor(Math.random()) +
//         str.substring(idx() + 1)
//     );
//   }
// });
