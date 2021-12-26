
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
    document.body.appendChild(launchHtml);
    launchHtml.innerHTML = 
      `<div class="main__h2"><span>01</span>Pick your destination
    </div>
  
    <div class="img__moon">
      <img src="./assets/destination/image-moon.webp" alt="Moon">
    </div>
  
      <div class="two__h2">
        <h2>Moon</h2>
      </div>
  
      <div class="main__p">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.  
      </div>
  
      <div class="hr_2"></div>
  
      <div class="specifications">
        <div class="p_2">Avg. distance</div>
        <h3>384,400 km</h3>
  
        <div class="p_3">Est. travel time</div>
        <h3>3 days</h3>
      </div>
    </div>`;

    launchHtml2.remove();
    launchHtml3.remove();
    launchHtml4.remove();
  
  };
  
  
  function tryTwo() {
    document.body.appendChild(launchHtml2);
    launchHtml2.innerHTML = `<div class="main__h2"><span>01</span>Pick your destination
    </div>
  
    <div class="img__moon">
      <img src="./assets/destination/image-mars.webp" alt="Moon">
    </div>
  
      <div class="two__h2">
        <h2>Mars</h2>
      </div>
  
      <div class="main__p">
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!  
      </div>
  
      <div class="hr_2"></div>
  
      <div class="specifications">
        <div class="p_2">Avg. distance</div>
        <h3>225 mil. km</h3>
  
        <div class="p_3">Est. travel time</div>
        <h3>9 months</h3>
      </div>
    </div>`;
    launchHtml.remove();
    launchHtml3.remove();
    launchHtml4.remove();
  
  };
  
  
  
  
  function tryThree() {
    document.body.appendChild(launchHtml3);
    launchHtml3.innerHTML = `<div class="main__h2"><span>01</span>Pick your destination
    </div>
  
    <div class="img__moon">
      <img src="./assets/destination/image-europa.webp" alt="Moon">
    </div>
  
      <div class="two__h2">
        <h2>Europa</h2>
      </div>
  
      <div class="main__p">
      The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.  
      </div>
  
      <div class="hr_2"></div>
  
      <div class="specifications">
        <div class="p_2">Avg. distance</div>
        <h3>628 mil. km</h3>
  
        <div class="p_3">Est. travel time</div>
        <h3>3 years</h3>
      </div>
    </div>`;
    launchHtml.remove();
    launchHtml2.remove();
    launchHtml4.remove();
  
  };
  
  
  function tryFour() {
    document.body.appendChild(launchHtml4);
    launchHtml4.innerHTML = `<div class="main__h2"><span>01</span>Pick your destination
    </div>
  
    <div class="img__moon">
      <img src="./assets/destination/image-titan.webp" alt="Moon">
    </div>
  
      <div class="two__h2">
        <h2>Titan</h2>
      </div>
  
      <div class="main__p">
      The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.  
      </div>
  
      <div class="hr_2"></div>
  
      <div class="specifications">
        <div class="p_2">Avg. distance</div>
        <h3>1.6 bil. km"</h3>
  
        <div class="p_3">Est. travel time</div>
        <h3>7 years</h3>
      </div>
    </div>`;
    launchHtml.remove();
    launchHtml2.remove();
    launchHtml3.remove();
  
  };
  
