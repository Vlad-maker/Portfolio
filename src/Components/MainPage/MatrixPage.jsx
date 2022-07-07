import React from 'react';
import './MatrixPage.css'

function MatrixPage() {

// const C = document.querySelector("canvas"),
//   $ = C.getContext("2d"),
//   W = (C.width = 1440),
//   H = (C.height = 400);

// const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
//   matrix = str.split("");

// let font = 11,
//   col = W / font,
//   arr = [];

// for (let i = 0; i < col; i++) arr[i] = 1;

// function draw() {
//   $.fillStyle = "rgba(0,0,0,.05)";
//   $.fillRect(0, 0, W, H);
//   $.fillStyle = "#fff";
//   $.font = font + "px system-ui";
//   for (let i = 0; i < arr.length; i++) {
//     let txt = matrix[Math.floor(Math.random() * matrix.length)];
//     $.fillText(txt, i * font, arr[i] * font);
//     if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
//     arr[i]++;
//   }
// }

// setInterval(draw, 123);

// window.addEventListener("resize", () => location.reload());

  return (
    // <div style={{margin: '0', background: '#000', overflow: 'hidden'}}>
    //   <canvas></canvas>
    // </div>
    <div className='matrix-page'>

{/* <!-- GRADIENT SPINNER --> */}
{/* <div class="spinner-box">
  <div class="circle-border">
    <div class="circle-core"></div>
  </div>
</div> */}

{/* <!-- SPINNER ORBITS --> */}
<div class="spinner-box">
  <div class="blue-orbit leo">
  </div>

  <div class="green-orbit leo">
  </div>

  <div class="red-orbit leo">
  </div>

  <div class="white-orbit w1 leo">
  </div><div class="white-orbit w2 leo">
  </div><div class="white-orbit w3 leo">
  </div>
</div>

{/* <!-- GRADIENT CIRCLE PLANES --> */}
<div class="spinner-box">
  <div class="leo-border-1">
    <div class="leo-core-1"></div>
  </div>
  <div class="leo-border-2">
    <div class="leo-core-2"></div>
  </div>
</div>

{/* <!-- SPINNING SQUARES --> */}
{/* <div class="spinner-box">
  <div class="configure-border-1">
    <div class="configure-core"></div>
  </div>
  <div class="configure-border-2">
    <div class="configure-core"></div>
  </div>
</div> */}

{/* <!-- LOADING DOTS... --> */}
{/* <div class="spinner-box">
  <div class="pulse-container">
    <div class="pulse-bubble pulse-bubble-1"></div>
    <div class="pulse-bubble pulse-bubble-2"></div>
    <div class="pulse-bubble pulse-bubble-3"></div>
  </div>
</div> */}

{/* <!-- SOLAR SYSTEM --> */}
<div class="spinner-box">
  <div class="solar-system">
    <div class="earth-orbit orbit">
      <div class="planet earth"></div>
      <div class="venus-orbit orbit">
        <div class="planet venus"></div>
        <div class="mercury-orbit orbit">
          <div class="planet mercury"></div>
          <div class="sun"></div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Three Quarter Spinner --> */}

{/* <div class="spinner-box">
  <div class="three-quarter-spinner"></div>
</div> */}

    </div>
  )
}

export default MatrixPage
