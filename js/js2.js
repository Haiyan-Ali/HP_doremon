function moveDiv(callback) {
    const div = document.getElementById('main74');
    // Calculate the new top position based on the current position
    const newPosition = div.style.top === '0px' ? 'top: calc(-1650px - 98vh)' : '0px';
  
    // Update the top position using requestAnimationFrame for smooth animation
    function animate() {
      const currentTop = parseInt(window.getComputedStyle(div).top);
      const targetTop = div.style.top === '0px' ? parseInt('-1650px') : 0;
  
      if (currentTop !== targetTop) {
        const direction = currentTop < targetTop ? 5 : -5; // Move the div 5 pixels at a time, adjust as needed
        const nextTop = currentTop + direction;
        div.style.top = `${nextTop}px`;
        requestAnimationFrame(animate);
      } else {
        if (callback && typeof callback === 'function') {
          setTimeout(callback, 0); // Execute the callback function if provided
        }
      }
    }
  
    animate();
  }
  
  moveDiv(function() {
    content = `
    <div style=" height: 98vh; color: white; text-align: center; padding-top: 30%; ">
                I Love you, my Doraemon,<br>
                Keep smiling every day, come what may,<br>
                I'll be with you always, never gone,<br>
                Through thick and thin, in every way. <br>
                <br>
                <br>

                <div class="d-flex" style="justify-content: center; width: 100%;">
                  <img src="/images/heart.png" alt="" width="70px">
                  <img src="/images/sweet_emoji.png" alt="" width="70px">

                </div>
                <br>
                <br>
                <h2>OK?</h2>
            </div>
    `
    document.getElementById('universal_modal_body').innerHTML = content;
    $('#universal_modal_A_btn').click()
  });
moveDiv()