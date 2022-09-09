(() => {
    const lbLinks = document.querySelectorAll('a:not(.close)');

    let theCaptions = [
        {
            name: "example1",
            copy: "This is some expample text for the first link"
        },

        {
            name: "example2",
            copy: "This is some expample text for the second link"
        }
    ]

    function popLightbox() {
        // debugger;
        let currentCaption = document.querySelector('.lightbox figcaption'),
            currentName = this.dataset.copyref;

        currentCaption.textContent = theCaptions.filter(item => item.name == currentName)[0].copy;
    }

    lbLinks.forEach(link => link.addEventListener('click', popLightbox));
})();