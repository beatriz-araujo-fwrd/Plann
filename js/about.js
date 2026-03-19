export function about() {

    const teamSection = document.querySelector('.section_team');
    const teamCards = document.querySelectorAll('.team_card');
    const teamNavLinks = document.querySelectorAll('.team_list_item');
    if (teamSection && teamCards.length > 0 && teamNavLinks.length > 0) {
        teamCards.forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 128px',
                end: 'bottom 128px',
                markers: true,
                onEnter: () => {
                    let activeIndex = document.querySelector('.team_list_item.active');

                    // clear previous active nav list el if it exists
                    if (activeIndex) {
                        activeIndex.classList.remove('active');
                    }

                    // update current active nav list el
                    teamNavLinks[i].classList.add('active');

                },
                onLeave: () => {
                    teamNavLinks[i].classList.remove('active');
                },
                onEnterBack: () => {
                    let activeIndex = document.querySelector('.team_list_item.active');

                    // clear previous active nav list el if it exists
                    if (activeIndex) {
                        activeIndex.classList.remove('active');
                    }

                    teamNavLinks[i].classList.add('active');
                },
                onLeaveBack: () => {
                    teamNavLinks[i].classList.remove('active');
                },
            });
        });
    }


    console.log("running about()");
}