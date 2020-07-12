import gsap from 'gsap';

const easeSlowIn = (element) => {
	gsap.to(element, 1.6, {
		opacity : 1,
		y       : 40,
		ease    : 'ease.slow(0.7, 0.7, false)',
		stagger : {
			amount : 0.1
		}
	});
};

const easeSlowOut = (element) => {
	gsap.to(element, 1.6, {
		opacity : 0,
		y       : -40,
		ease    : 'ease.slow(0.7, 0.7, false)',
		stagger : {
			amount : 0.1
		}
	});
};

const fadeIn = (element) => {
	gsap.to(element, 1, {
		opacity : 1,
		y       : 80,
		ease    : 'power4.out',
		stagger : {
			amount : 0.3
		}
	});
};

const fadeOut = (element) => {
	gsap.to(element, 1, {
		opacity : 0,
		y       : -80,
		ease    : 'power4.out'
	});
};

export { easeSlowIn, easeSlowOut, fadeIn, fadeOut };
