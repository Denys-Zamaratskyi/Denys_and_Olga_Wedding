gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1){
	ScrollSmoother.create({
		wrapper:'.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', {opacity: 1},{
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { x: -50, opacity: 0},{
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true  //рассчитывает позицию
			}
		})
	});

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { x: 50, opacity: 0},{
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true  //рассчитывает позицию
			}
		})
	});
}
function submitRSVP(isAttending) {
    const guestName = document.getElementById('guest-name').value;

    if (!guestName) {
        alert('Будь ласка, введіть ваше ім\'я.');
        return;
    }

    const rsvpData = {
        name: guestName,
        attending: isAttending
    };

    fetch('server/rsvp.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rsvpData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Дякуємо за вашу відповідь!');
        } else {
            alert('Виникла помилка при відправці вашої відповіді. Будь ласка, спробуйте пізніше.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Виникла помилка при відправці вашої відповіді. Будь ласка, спробуйте пізніше.');
    });
}
