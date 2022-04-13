
const colorsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const changeBtn = document.querySelector('.clr-change');

changeBtn.addEventListener('click', function () {
   let hex = '#';

   for (let i = 0; i < 6; i++) {
      let randomNumber = Math.trunc(Math.random() * colorsArr.length);
      hex += colorsArr[randomNumber];
   }
   console.log(hex);
   document.querySelector('main').style.backgroundColor = hex;
   document.querySelector('.clr-name').textContent = hex;
});


for (let i = 0; i < 6; i++) {
   console.log(`Print ${i}`);
}