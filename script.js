//your JS code here. If required.
function handleResize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
	// let width = document.documentElement.clientWidth;
    // let height = document.documentElement.clientHeight;
   let text = `Width: ${windowWidth} and Height: ${windowHeight}`;
   let element = document.getElementById('screen-size');
      element.innerText = text;  
  }
  window.addEventListener('resize', handleResize);
