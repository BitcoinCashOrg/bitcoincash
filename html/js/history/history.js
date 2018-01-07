$(function(){
    $.getJSON( "./js/history/history.json", function( data ) {
        data.forEach(addItemToTimeLine)
    });

});

function addItemToTimeLine(item) {
    $('#bch-timeline').append('<div class="bch-timeline-block">' +
        '            <div class="bch-timeline-img ' + item.type + '">' +
        '                <img src="img/history/' + item.type + '-icon.svg" alt="' + item.type + '">' +
        '            </div>' +
        '            <div class="bch-timeline-content">' +
        '                <span class="bch-read-more">' +
        '                    <a target="_blank" href="' + item.proof + '" class="bch-read-more">' +
        '                        <img src="img/history/external-link.svg">' +
        '                    </a>' +
        '                </span>' +
        '                <span class="bch-date">' + item.date + '</span>' +
        '                <span>' + item.text + '</span>' +
        '            </div>' +
        '        </div>')
}