
document.addEventListener('DOMContentLoaded', tryOne)
const numberOne = document.getElementById('btn__one');
const numberTwo = document.getElementById('btn__two');
const numberThree = document.getElementById('btn__three');


numberOne.addEventListener('click', tryOne);
numberTwo.addEventListener('click', tryTwo);
numberThree.addEventListener('click', tryThree);


const launchHtml = document.createElement('div');
const launchHtml2 = document.createElement('div');
const launchHtml3 = document.createElement('div');


function tryOne() {
  document.getElementById('main__section').appendChild(launchHtml);
  launchHtml.innerHTML = 
    `<div class="main__h2"><span>03</span>Meet your crew
    </div>

    <div class="img__1">
        
     </div>

    <div class="role">The terminology ...</div>

    <div class="two__h2">
      <h2>Launch vehicle</h2>
    </div>

    <div class="main__p">
    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!    
    </div>`;

  launchHtml2.remove();
  launchHtml3.remove();

};


function tryTwo() {
  document.getElementById('main__section').appendChild(launchHtml2);
  launchHtml2.innerHTML = `<div class="main__h2"><span>03</span>Meet your crew
  </div>

  <div class="img__2">
      
   </div>

  <div class="role">The terminology ...</div>

  <div class="two__h2">
    <h2>Spaceport</h2>
  </div>

  <div class="main__p">
  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.   
  </div>`;
  launchHtml.remove();
  launchHtml3.remove();

};




function tryThree() {
  document.getElementById('main__section').appendChild(launchHtml3);
  launchHtml3.innerHTML = `<div class="main__h2"><span>03</span>Meet your crew
  </div>

  <div class="img__3">
      
   </div>

  <div class="role">The terminology ...</div>

  <div class="two__h2">
    <h2>Space capsule</h2>
  </div>

  <div class="main__p">
  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.    
  </div>`;
  launchHtml.remove();
  launchHtml2.remove();

};
