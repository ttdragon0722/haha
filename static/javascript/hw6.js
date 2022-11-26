window.addEventListener("load", (event) => {
    const content = document.getElementsByClassName("content");
    
    for (var i=0;i<10;i++) {
        for (var mid=1;mid<10;mid++){
            var child = document.createElement("div");
            var result = (i+1)*mid;
            if (result < 10) {
                child.innerHTML = `${i+1}*${mid}=&nbsp&nbsp${result}`;
                content[i].appendChild(child);
            } else {
                child.innerHTML = `${i+1}*${mid}=${result}`;
                content[i].appendChild(child)
            }
        }
    }
})
