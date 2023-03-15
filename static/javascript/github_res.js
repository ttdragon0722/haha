repository = []

$(document).ready(function () {
    $.getJSON("https://api.github.com/users/ttdragon0722/repos", function (data) {
        console.log('data now', data)

        const project_list = $('.project-list')
        for (var i in data) {
            repository.push(data[i])
            project_list.append(
                '<div class="project-card"><div class="project-title" style="padding-bottom:0;"><a href="" target="_blank"></a><h5 class="project-lang" style="font-size:16px;"></h5><hr style="width:80%:margin-top:0px;"></hr></div><div class="project-content"></div></div>')
        }
        console.log(repository)
        $('.project-card').each(function (i) {
            $(this).children('.project-title').children('a').attr("href",repository[i]["html_url"])
            $(this).children('.project-title').children('a').html(
                repository[i]['name']
            )
            $(this).children('.project-title').children('h5').html(
                repository[i]['language']
            )
            $(this).children('.project-content').html(
                repository[i]['description']
            )
            if (repository[i]['homepage']) {
                $(this).children('.project-content').append(`<h5 class="card-link" style="text-align: center;"><a href="" target="_blank" style="font-size:16px;">網站連結</a></h5>`)
                $(this).children('.project-content').children('.card-link').children('a').attr("href",repository[i]['homepage'])
            } else {
                console.log(repository[i]['name']+"remove");
                // $(this).children('.project-content').children('.card-link').children('a').remove();
            }
        })
    });
});


$(window).on('load', function () {
});