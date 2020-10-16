 $(document).ready(function(){
    var description = $( "#description" );

    $( "#btnClim" ).change(() => {
        if ($( "#btnClim" ).prop("checked")) {
            description.css("transform", `translateX(0px)`);
        }
    });

    $( "#btnGainable" ).change(() => {
        if ($( "#btnGainable" ).prop("checked")) {
            description.css("transform", `translateX(-33%)`);
        }
    });

    $( "#btnEntretien" ).change(() => {
        if ($( "#btnEntretien" ).prop("checked")) {
            description.css("transform", `translateX(-66%)`);
        }
    });
});