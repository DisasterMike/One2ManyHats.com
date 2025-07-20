// // maybe the navbar should inject this code??? it inserts it into the head???

// const navContainer = document.querySelector('.nav-wrapper')

// // create div that determines when to change the navbar
// const scrollWatcher = document.createElement("div");
// // set data attribute so we know what it does
// scrollWatcher.setAttribute("data-scroll-watcher", "");
// navContainer.before(scrollWatcher);

// // add a buffer before the nav goes to fixed - TODO: remove this if continue not to use
// const observerMarginValues = `${0}px 0px 0px 0px`

// //
// const navObserver = new IntersectionObserver((entries) => {
//   navContainer.classList.toggle("sticking-nav", !entries[0].isIntersecting) // second parameter makes it so the toggle will only remove if false, or add if true
// }, {rootMargin: observerMarginValues});

// navObserver.observe(scrollWatcher);