
function myFunction() {
    $('#temp62').css('top', '0px');
    setTimeout(function() {
      content = `
      <div id="main74">
            <div style="width: 98vw; height: 80vh; color: white; text-align: center; padding-top: 30%; ">
                
            </div>





            <div class="child_cont_2">
                <div class="child">
                    Happy birthday, my cute Doraemon, my bestie so true, <br>
                    Forever grateful for the friendship I share with you.
                </div>
            </div>

            <div class="child_cont_1">
                <div class="child">
                    With your smile, you light up the day,<br>
                    A friend like you, in my heart, will always stay.
                </div>
            </div>
            <div class="child_cont_2">
                <div class="child">
                    Your caring ways help me through,<br>
                    Through thick and thin, you're always true.
                </div>
            </div>
            <div class="child_cont_1">
                <div class="child">
                    With your smile, you light up the day,<br>
                    A friend like you, in my heart, will always stay.
                </div>
            </div>
            <div class="child_cont_2">
                <div class="child">
                    In my darkest hours, you shine like a star,<br>
                    Your mad dignity lifts me afar.
                </div>
            </div>
            <div class="child_cont_1">
                <div class="child">
                    A beautiful soul with a heart so kind,<br>
                    Your friendship, a treasure, I'm lucky to find.
                </div>
            </div>
            <div class="child_cont_2">
                <div class="child">
                    You're like a little sister, cute and sweet,<br>
                    Your presence in my life, an absolute treat.
                </div>
            </div>




            <div class="child_cont_1">
                <div class="child">
                    Here's to the laughter, the tears, and the crazy rides, <br>
                    Wishing you a day filled with joy that never subsides.
                </div>
            </div>
            <div class="child_cont_2">
                <div class="child">
                    Best friend, you're a treasure, precious and rare, <br>
                    May your birthday be filled with love, beyond compare.
                </div>
            </div>
            <div class="child_cont_1">
                <div class="child">
                    You're the Doraemon to my Nobita, always by my side, <br>
                    Through thick and thin, in you, I confide.
                </div>
            </div>
            <div class="child_cont_2">
                <div class="child">
                    On your special day, I celebrate your existence, <br>
                    A friendship that's pure and filled with persistence.
                </div>
            </div>
            <div class="child_cont_1">
                <div class="child">
                    Your mad antics and adorable ways, <br>
                    Brighten up my world and light up my days.
                </div>
            </div>

            <div class="child_cont_2">
                <div class="child">
                    Together we've conquered adventures, big and small, <br>
                    Creating memories that make us laugh, and sometimes fall.
                </div>
            </div>

            <div class="child_cont_1">
                <div class="child">
                    With your infectious laughter and magical charm, <br>
                    You bring happiness and warmth, keeping my heart warm.
                </div>
            </div>

            <div class="child_cont_2">
                <div class="child">
                    In this crazy journey of life, you're my guiding light,<br>
                    My partner in mischief, making every day feel right.
                </div>
            </div>

            <div class="child_cont_1">
                <div class="child">
                    Happy birthday to my best friend, the one I hold so dear, <br>
                    You're like my own Doraemon, spreading joy and cheer.
                </div>
            </div>





        </div>
      
      `


      document.getElementById('main').innerHTML = content;
      document.head.appendChild(Object.assign(document.createElement('script'), { src: 'js/js2.js' }));

      
    }, 1500);
    
    
  }
  
  
  $(document).ready(function () {
    function ddrop() {
  
      $('#happy_heading_1').css('top', '-50px').animate({ top: '30%' }, 500, function () {
        $('#happy_heading_2').css('top', '-50px').animate({ top: '30%' }, 500, function () {
          $('#happy_heading_3').css('top', '-50px').animate({ top: '40%' }, 500, function () {
            $('#happy_heading_4').css('top', '-50px').animate({ top: '40%' }, 500, function () {
              $('#happy_heading_5').css('top', '-50px').animate({ top: '40%' }, 500, function () {
                $('#happy_heading_6').css('display', 'block').animate({ display: 'block' }, 500, function () {
                  $('#happy_heading_6').css('bottom', '-50px').animate({ bottom: '15%' }, 500, function () {
                    $('#happy_heading_6').css('transform', 'rotate(0deg)').animate({ transform: 'rotate(25deg)' }, 200, function () {
                      $('#happy_heading_6').css('transform', 'rotate(25deg)').animate({ transform: 'rotate(-25deg)' }, 200, function () {
                        $('#happy_heading_6').css('transform', 'rotate(-25deg)').animate({ transform: 'rotate(25deg)' }, 200, function () {
                          $('#happy_heading_6').css('transform', 'rotate(25deg)').animate({ transform: 'rotate(-25deg)' }, 200, function () {
                            $('#happy_heading_6').css('transform', 'rotate(-25deg)').animate({ transform: 'rotate(25deg)' }, 200, function () {
                              $('#happy_heading_6').css('transform', 'rotate(25deg)').animate({ transform: 'rotate(-25deg)' }, 200, function () {
                                $('#happy_heading_6').css('transform', 'rotate(0deg)').animate({ transform: 'rotate(0deg)' }, 200, function () {
                                  setTimeout(myFunction, 4000); // Delay execution of myFunction by 30 seconds
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
  
  
    }
    setTimeout(ddrop, 800);
  
  });