document.write(`
<div class="section background-dark over-hide" id="home" style="position: relative; overflow: hidden;">
	<!-- Overlay -->
	<div class="hero-overlay"></div>

	<!-- Hero Text -->
	<div class="hero-center-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 text-center" style="margin-top: 150px;">
					<h1 class="hero-heading animate-text">
						Welcome To <br><span class="animate-text-span"> Hotel Goura Daringbadi </span>
					</h1>
				</div>
			</div>
		</div>
	</div>

	<!-- Slider -->
	<div class="hero-slider" id="heroSlider">
		<div class="slide active" style="background-image: url('goura-img/interior/2.jpeg');"></div>
		<div class="slide" style="background-image: url('goura-img/exterior/1.jpg');"></div>
		<div class="slide" style="background-image: url('goura-img/deluxe-room-6/4.JPG');"></div>
	</div>

	<!-- Booking Form at Bottom -->
	<div class="booking-wrapper">
  <div class="booking-form">
    <input type="date" class="input-date" id="checkin" placeholder="Check-in">
    <input type="date" class="input-date" id="checkout" placeholder="Check-out">

    <a class="book-btn" id="whatsapp-link" href="booking.html" target="_blank">
      <span>book now</span>
    </a>
  </div>
  </div>
</div>

<!-- Styles -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

.hero-slider {
	position: relative;
	width: 100%;
	height: 99vh;
	overflow: hidden;
	z-index: 0;
}

.hero-slider .slide {
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transform: scale(1.08);
	transition: opacity 1.5s ease, transform 1.5s ease;
}

.hero-slider .slide.active {
	opacity: 1;
	transform: scale(1);
	z-index: 0;
}

.hero-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.55);
	backdrop-filter: blur(2px);
	z-index: 1;
}

/* Text Heading */
.hero-heading {
	color: #fff;
	font-size: 70px;
	font-family: 'Playball', cursive;
	letter-spacing: 2px;
	word-spacing: 5px;
	position: relative;
	z-index: 2;
	text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
	opacity: 0;
	transform: translateY(40px);
	transition: opacity 1.2s ease, transform 1.2s ease;
}

.hero-heading.show {
	opacity: 1;
	transform: translateY(0);
}

/* Booking Wrapper at Bottom */
.booking-wrapper {
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(255,255,255,0.15);
	backdrop-filter: blur(10px);
	border-radius: 20px;
	padding: 20px 30px;
	box-shadow: 0 8px 32px rgba(0,0,0,0.3);
	z-index: 3;
	width: 90%;
	max-width: 800px;
}

/* Booking Form */
.booking-form {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;
}

.input-date, .input-select {
	padding: 12px 20px;
	border: none;
	border-radius: 50px;
	background: rgba(255,255,255,0.8);
	color: #333;
	width: 160px;
	font-size: 16px;
	transition: all 0.3s ease-in-out;
}

.input-date::placeholder {
	color: #555;
}

.input-select {
	appearance: none;
	-webkit-appearance: none;
	background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23333' d='M0 0l5 5 5-5z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 15px center;
	background-size: 10px;
}

.book-btn {
	padding: 12px 30px;
	border: none;
	border-radius: 50px;
	background: #b6985a;
	color: #fff;
	font-size: 16px;
	cursor: pointer;
	transition: background 0.3s ease;
}

.book-btn:hover {
	background: #9a7b3d;
}

/* Mobile Responsive */
@media(max-width: 768px) {
	.hero-heading {
		font-size: 58px;
		letter-spacing: 1px;
		word-spacing: 2px;
		line-height: 1.3;
	}
        .animate-text-span{
            font-size: 26px;
        }

	.booking-form {
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.input-date, .input-select, .book-btn {
		width: 90%;
		font-size: 14px;
		padding: 10px 15px;
	}

	.booking-wrapper {
	display: none;
	}
.hero-slider {
    height: 70vh;
}
   
}
</style>


<!-- Script -->
<script>
let currentSlide = 0;
const slides = document.querySelectorAll('#heroSlider .slide');
const heading = document.querySelector('.hero-heading');

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.toggle('active', i === index);
	});

	// Animate text
	heading.classList.remove('show');
	setTimeout(() => {
		heading.classList.add('show');
	}, 300);
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}

// Auto Slide
setInterval(nextSlide, 5000);

// Initial Text Animation
window.onload = () => {
	setTimeout(() => {
		heading.classList.add('show');
	}, 500);
}
</script>
`);
