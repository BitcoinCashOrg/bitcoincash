$(function(){
    $.getJSON( "./js/history/history.json", function( data ) {
        data.forEach(addItemToTimeLine)
    });

});

function addItemToTimeLine(item) {
    $('#bcc-timeline').append('<div class="bcc-timeline-block">' +
        '            <div class="bcc-timeline-img ' + item.type + '">' +
        '                <img src="img/history/' + item.type + '-icon.svg" alt="' + item.type + '">' +
        '            </div>' +
        '            <div class="bcc-timeline-content">' +
        '                <span class="bcc-read-more">' +
        '                    <a target="_blank" href="' + item.proof + '" class="bcc-read-more">' +
        '                        <img src="img/history/external-link.svg">' +
        '                    </a>' +
        '                </span>' +
        '                <span class="bcc-date">' + item.date + '</span>' +
        '                <span>' + item.text + '</span>' +
        '            </div>' +
        '        </div>')
}