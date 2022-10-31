$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = $(".panel");

            if (panel.css("display") === "block") {
                panel.css("display", "none");
            } else {
                panel.css("display", "block");
            }
        });
    }
});

function PanelClick() {
    $(".panel").css("display","none")
}