const $scrollToTopButton = document.querySelector(".scroll-to-top");

const onScrollToTopClick= () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$scrollToTopButton.addEventListener("click",onScrollToTopClick);

const toggleVisibilityOfScrollButton = () => {
    if (window.scrollY > 400) {
        $scrollToTopButton.classList.add("show");
    } else {
        $scrollToTopButton.classList.remove("show");

    }
};
document.addEventListener("scroll", () => {
    toggleVisibilityOfScrollButton();
});

