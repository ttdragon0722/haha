$(document).ready(function () {
    var classList = [".one",".two",".three",".four",".five",".six",".seven",".eight",".nine"]

    for (var mid = 1; mid<10;mid++){
        for (var i=1;i<10;i++) {
            var result = i*mid;
            if (result < 10) {
                $(classList[i-1]).append(
                    `<div>${i}*${mid}=&nbsp&nbsp${result}</div>`
                    );
            } else {
                $(classList[i-1]).append(
                    `<div>${i}*${mid}=${result}</div>`
                    );
            }
        };
    }
});