$(document).ready(function () {
    // reload(1,()=>{
    //     $("body").css("left", (window.innerWidth-800)/2);
    //     console.log("sss")
    // }
    // )
});

function reload(time,func) {
    for (let i = 1; i <= time; i++) {
        window.setTimeout(function () {
            if (true) {
                func()
                if (i == time) {
                    reload(time,func)
                }
            }
        }, 1000 * i);
    }
}