
document.addEventListener('DOMContentLoaded', tryOne)
const numberOne = document.getElementById('btn__one');
const numberTwo = document.getElementById('btn__two');
const numberThree = document.getElementById('btn__three');
const numberFour = document.getElementById('btn__four');

numberOne.addEventListener('click', tryOne);
numberTwo.addEventListener('click', tryTwo);
numberThree.addEventListener('click', tryThree);
numberFour.addEventListener('click', tryFour); 

const launchHtml = document.createElement('div');
const launchHtml2 = document.createElement('div');
const launchHtml3 = document.createElement('div');
const launchHtml4 = document.createElement('div');

function tryOne() {
  document.getElementById('main__section').appendChild(launchHtml);
  launchHtml.innerHTML = 
    `<div class="main__h2"><span>02</span>Meet your crew
    </div>

    <div class="img__moon">
        <img src="./assets/crew/image-douglas-hurley.webp" alt="Moon">
     </div>

    <div class="role">COMMANDER</div>

    <div class="two__h2">
      <h2>Douglas Hurley</h2>
    </div>

    <div class="main__p">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2    
    </div>`;

  launchHtml2.remove();
  launchHtml3.remove();
  launchHtml4.remove();

};


function tryTwo() {
  document.getElementById('main__section').appendChild(launchHtml2);
  launchHtml2.innerHTML = `<div class="main__h2"><span>02</span>Meet your crew
  </div>

  <div class="img__moon">
      <img src="./assets/crew/image-mark-shuttleworth.webp" alt="Moon">
   </div>

  <div class="role">Mission Specialist</div>

  <div class="two__h2">
    <h2>Mark Shuttleworth</h2>
  </div>

  <div class="main__p">
    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.   
  </div>`;
  launchHtml.remove();
  launchHtml3.remove();
  launchHtml4.remove();

};




function tryThree() {
  document.getElementById('main__section').appendChild(launchHtml3);
  launchHtml3.innerHTML = `<div class="main__h2"><span>02</span>Meet your crew
  </div>

  <div class="img__moon">
      <img src="./assets/crew/image-victor-glover.webp" alt="Moon">
   </div>

  <div class="role">Pilot</div>

  <div class="two__h2">
    <h2>Victor Glover</h2>
  </div>

  <div class="main__p">
    Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.    
  </div>`;
  launchHtml.remove();
  launchHtml2.remove();
  launchHtml4.remove();

};


function tryFour() {
  document.getElementById('main__section').appendChild(launchHtml4);
  launchHtml4.innerHTML = `<div class="main__h2"><span>02</span>Meet your crew
  </div>

  <div class="img__moon">
      <img src="./assets/crew/image-anousheh-ansari.webp" alt="Moon">
   </div>
   

  <div class="role">Flight Engineer</div>

  <div class="two__h2">
    <h2>Anousheh Ansari</h2>
  </div>

  <div class="main__p">
    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  
  </div>`;
  launchHtml.remove();
  launchHtml2.remove();
  launchHtml3.remove();

};

