class GitRes {
    constructor (res_name,res_link,description,update_time,language,homepage) {
        this.res_name = res_name;
        this.res_link = res_link;
        if (this.description) {
            this.description = description;
        } else {
            this.description = "";
        }
        this.update_time = update_time;
        this.language = language;
        if (homepage) {
            this.homepage = homepage;
        } else {
            this.homepage = null;
        }
        console.log(this.homepage);
    }
}

src = [];
$.getJSON("https://api.github.com/users/ttdragon0722/repos",function (data) {
    for (var i = 0 ; i < data.length;i++) {
        src.push(new GitRes(data[i]["name"],data[i]["html_url"],data[i]["description"],data[i]["created_at"],data[i]["language"],data[i]["homepage"]));
    }
    
    let idx = 0
    const project_group = $(".project-group");
    
    while (true) {
        project_group.append(`<div class="project-row"></div>`)
        for (var row = 0; row <2;row++) {
            if (src[idx].homepage) {
                $(".project-row").last().append(`
                <div class="project">
                <a href="${src[idx].res_link}">
                    <h2>${src[idx].res_name}</h2>
                </a>
                <p class="type">${src[idx].language}</p>
                <p>${src[idx].description}</p>
                <button class="button-28" role="button" onclick="window.location.href='${src[idx].homepage}'">LINK</button>
                <p class="time">${src[idx].update_time}</p>
            </div>
                `);
            } else {
                
                $(".project-row").last().append(`
                <div class="project">
                <a href="${src[idx].res_link}">
                    <h2>${src[idx].res_name}</h2>
                </a>
                <p class="type">${src[idx].language}</p>
                <p>${src[idx].description}</p>
                <p class="time">${src[idx].update_time}</p>
                `);
            }
            idx +=1
        }
    }
    console.log(idx);
},
);