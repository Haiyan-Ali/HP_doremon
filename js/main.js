$(document).ready(function () {
    $('#yes_no_modal_A_btn').click()
});


function yes_i_am_doremon() {
    $('#yes_no_modal_close_btn').click()
    content = `
    <div id="temp62" style="background-color: black; position: absolute; height: 100%; width: 100%; top: -100%; transition: all 1s ease-in-out; z-index: 100;"></div>
        <canvas id="Canvas"></canvas>
        <div style=" position: relative; width: 400px; height: 100vh; margin: auto;">
            <h1 class="happy_heading" id="happy_heading_1">Happy </h1>
            <h1 class="happy_heading" id="happy_heading_2">Birthday </h1>
            <h1 class="happy_heading" id="happy_heading_3">My </h1>
            <h1 class="happy_heading" id="happy_heading_4">Pagal </h1>
            <h1 class="happy_heading" id="happy_heading_5">Doremon </h1>
            <h1 id="happy_heading_6"><img src="images/cake_image.png" width="150px" alt=""> </h1>
        </div>
    `
    document.getElementById('main').innerHTML = content
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'js/firework.js' }));
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'js/js1.js' }));
    


   


}

function no_i_am_doremon() {
    $('#yes_no_modal_close_btn').click()
    content = `
    <div style="display: flex; align-items: center; justify-content: center; height: 80vh;">
        <p style="font-size: 20px; text-align: center;">Then Sorry!! 
            <br>
            This Massage is not for you.
            <br>
            <br>
            <img src="/images/smile_emoji.png" width="45px" alt="">
        </p>
    </div>
    `
    document.getElementById('universal_modal_body').innerHTML = content;
    $('#universal_modal_A_btn').click()

}