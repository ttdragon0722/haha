repository = []

$(document).ready(function () {
    $.getJSON("https://api.github.com/users/ttdragon0722/repos", function (data) {
        console.log('data now', data)

        const project_list = $('.project-list')
        for (var i in data) {
            repository.push(data[i])
            project_list.append('<div class="project-card"><div class="project-title"><a href="" target="_blank"></a> </div><div class="project-content"></div></div>')
        }
        console.log(repository)
        $('.project-card').each(function (i) {
            $(this).children('.project-title').children('a').attr("href",repository[i]["html_url"])
            $(this).children('.project-title').children('a').html(
                repository[i]['name']
            )
            $(this).children('.project-content').html(
                repository[i]['description']
            )
        })
    });
});


$(window).on('load', function () {
});