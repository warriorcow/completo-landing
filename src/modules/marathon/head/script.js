document.addEventListener('DOMContentLoaded', function () {
    function timer() {
        var nowDate = new Date();
        var achiveDate = new Date(2022,1,5,1,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
        var result = (achiveDate - nowDate)+1000;
        if (result < 0) {
            return undefined;
        }
        var seconds = Math.floor((result/1000)%60);
        var minutes = Math.floor((result/1000/60)%60);
        var days = Math.floor(result/1000/60/60/24);
        var hours = Math.floor((result/1000/60/60)%24 + days*24);

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        seconds = String(seconds).split('');
        minutes = String(minutes).split('');
        hours = String(hours).split('');

        $('.marathon__banner .timerBlock__seconds').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(seconds[0]) : $(item).text(seconds[1])
        })
        $('.marathon__banner .timerBlock__minuts').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(minutes[0]) : $(item).text(minutes[1])
        })
        $('.marathon__banner .timerBlock__hourse').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(hours[0]) : $(item).text(hours[1])
        })
        $('.modal .timerBlock__seconds').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(seconds[0]) : $(item).text(seconds[1])
        })
        $('.modal .timerBlock__minuts').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(minutes[0]) : $(item).text(minutes[1])
        })
        $('.modal .timerBlock__hourse').find('.timerBlock__item').each(function (index, item) {
            index === 0 ? $(item).text(hours[0]) : $(item).text(hours[1])
        })
        setTimeout(timer, 1000);
    }
    timer();
});