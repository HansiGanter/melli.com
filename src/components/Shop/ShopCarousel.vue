<template>
  <!-- Slider container -->
  <div class="slider">
    <!-- slide 1 -->
    <div class="slide">
      <img src="https://source.unsplash.com/random?landscape,mountain" alt="" />
    </div>

    <!-- slide 2 -->
    <div class="slide">
      <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
    </div>

    <!-- slide 3 -->
    <div class="slide">
      <img src="https://source.unsplash.com/random?landscape,night" alt="" />
    </div>

    <!-- slide 4 -->
    <div class="slide">
      <img src="https://source.unsplash.com/random?landscape,city" alt="" />
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
}

.slider {
  width: 100%;
  /* max-width: 800px; */
  height: 100%;
  /* height: 350px; */
  position: relative;
  overflow: hidden;
  /* <===  */
  border-radius: 15px;
}

.slide {
  width: 100%;
  /* max-width: 800px; */
  height: 100%;
  /* height: 350px; */
  position: absolute;
  transition: all 0.5s;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  z-index: 10px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
}

.btn:active {
  transform: scale(1.1);
}

.btn-prev {
  top: 45%;
  left: 2%;
}

.btn-next {
  top: 45%;
  right: 2%;
}

/* .slider {
  max-width: 100rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s;
}

.slide > img {
  // Only for images that have different size than slide 
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;

  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
  font-size: 3.25rem;
  cursor: pointer;
}

 */
</style>