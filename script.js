const date = new Date().toLocaleString('default', {weekday: "short"});
const today = date.toLowerCase();

$(`span.${today}`).css("background-color", "hsla(186, 34%, 60%)")

$.getJSON('data.json', function(json){

    for (let i = 0; i <= 6; i++) {
        $(`#day-${i}`).text(`${json[i].day}`)
        $(`#span-${i}`).css("height", `${json[i].amount * 5}`)

        $(`#bar-gp-${i}`).on("mouseover", function() {

            if ( today === json[i].day) {
                $(`#span-${i}`).css("background-color", "hsla(186, 34%, 60%, .7)");
                $(`#amount-${i}`).text(`$${json[i].amount}`);
                $(`#txt-${i}`).css("visibility", "visible");
            } else {
                $(`#span-${i}`).css("background-color", "hsla(10, 79%, 65%, .7)");
                $(`#amount-${i}`).text(`$${json[i].amount}`);
                $(`#txt-${i}`).css("visibility", "visible");
        }
        })

        $(`#bar-gp-${i}`).on("mouseleave", function() {
            if ( today === json[i].day) {
                $(`#span-${i}`).css("background-color", "hsla(186, 34%, 60%)");
                $(`#txt-${i}`).css("visibility", "hidden");
            } else {
                $(`#span-${i}`).css("background-color", "hsl(10, 79%, 65%)");
                $(`#txt-${i}`).css("visibility", "hidden");
            }; 
        });
    };
});