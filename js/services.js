export function services() {
    const customNavSection = document.querySelector('.fixed_custom_nav_trigger');
    const customNav = document.querySelector('.layout350_tabs-menu_wrapper');
    if (customNavSection && customNav) {
        ScrollTrigger.create({
            trigger: customNavSection,
            start: 'top top',
            end: 'max',
            onEnter: () => {
                customNav.classList.add('shrink');
            },
            onLeaveBack: () => {
                customNav.classList.remove('shrink');
            }
        });
    }

    console.log("running services()");

}