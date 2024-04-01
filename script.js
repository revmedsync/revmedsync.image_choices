$(document).ready(function() {
  const carouselSlide = $('.carousel-slide');
  const images = $('.carousel-slide img');
  const totalImages = images.length;
  const colors1 = ['#191919', '#E19898', '#180A0A', '#D8E9A8', '#FEC260', '#E19898', '#bfbfbf', '#040D12', '#000000', '#F5E8C7'];
  const colors2 = ['#B9B4C7', '#E19898', '#E7AB79', '#D8E9A8', '#FEC260', '#E19898', '#bfbfbf', '#E7F6F2', '#EEEEEE', '#F5E8C7'];
  const borderColors = ['#0E8388', '#FF204E', '#CD1818', '#E3651D', '7F8487' , '03C988' ];
  const arrowColors = ['#AAAAAA', '#000000', '#AAAAAA', '#000000', '#000000', '#000000', '#000000', '#AAAAAA', '#AAAAAA', '#F5E8C7']; 
  images.clone().appendTo(carouselSlide);

  let counter = 0; 
  let size = images.first().width();

  carouselSlide.css('transform', `translateX(${-size * counter}px)`);

  $('#next').click(function() {
    counter++;
    moveSlide();
  });

  $('#prev').click(function() {
    counter--;
    moveSlide();
  });

  // Function to move the slide
  function moveSlide() {
    carouselSlide.css('transition', 'transform 0.5s ease-in-out');
    carouselSlide.css('transform', `translateX(${-size * counter}px)`);

    // Check if reached the end, if yes, reset the counter and transition to the first image
    if (counter >= totalImages) {
      setTimeout(() => {
        carouselSlide.css('transition', 'none');
        counter = 0;
        carouselSlide.css('transform', `translateX(${-size * counter}px)`);
      }, 500);
    }

    // Check if reached the beginning, if yes, reset the counter and transition to the last image
    if (counter < 0) {
      setTimeout(() => {
        carouselSlide.css('transition', 'none');
        counter = totalImages - 1;
        carouselSlide.css('transform', `translateX(${-size * counter}px)`);
      }, 500);
    }
    updateBackgroundColor();
    changeBorderColor();
    // Log the counter value
    console.log('Counter:', counter);
  }

  // Automatic sliding functionality
  let autoSlideInterval = setInterval(() => {
    counter++;
    moveSlide();
  }, 3000); 

  // Pause automatic sliding when hovering over the carousel
  $('.carousel-container').hover(
    () => clearInterval(autoSlideInterval), // Stop automatic sliding
    () => { // Resume automatic sliding
      autoSlideInterval = setInterval(() => {
        counter++;
        moveSlide();
      }, 3000); 
    }
  );

  function updateBackgroundColor() {
    const altText = $('.carousel-slide img').eq(counter).attr('alt');
    let altIndex;
    if (altText && altText.trim() !== "") {
      altIndex = parseInt(altText.substring(7)); // Extract the number from alt text ("Poster X")
      altIndex = (altIndex - 1) % colors1.length; // Adjust to fit within the length of the colors array
    } else {
      altIndex = Math.floor(Math.random() * colors1.length);
    }
    const selectedColor1 = colors1[altIndex];
    const selectedColor2 = colors2[altIndex];
    const selectedColor3 = arrowColors[altIndex];
    

    $('.main-body .wrapper').css('background-color', selectedColor1); // Corrected selector
    $('.main-body .text').css('color', selectedColor2);
    $('#prev').css('color', selectedColor3); // Select the previous button and apply color
    $('#next').css('color', selectedColor3);  
  }
  
  function changeBorderColor() {
    const element = $('.in-wrap')[0]; // Select the first element with class 'in-wrap'
    let index = 0;
  
    // Set interval to change border color every 1 second (adjust as needed)
    setInterval(() => {
      // Apply current border color
      element.style.borderColor = borderColors[index];
      
      // Move to the next color or loop back to the beginning if reached the end
      index = (index + 1) % borderColors.length;
    }, 1000); // Change color every 1 second (adjust as needed)
  }
  
});
