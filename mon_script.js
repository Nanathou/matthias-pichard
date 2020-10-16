 $(document).ready(function(){
    var description = $( "#description" );

    $( "#btnClim" ).change(() => {
        console.log("Hello 1");
        if ($( "#btnClim" ).prop("checked")) {
            description.css("transform", `translateX(0px)`);
        }
    });

    $( "#btnGainable" ).change(() => {
        console.log("Hello 2");
        if ($( "#btnGainable" ).prop("checked")) {
            description.css("transform", `translateX(-33%)`);
        }
    });

    $( "#btnEntretien" ).change(() => {
        console.log("Hello 3");
        if ($( "#btnEntretien" ).prop("checked")) {
            description.css("transform", `translateX(-66%)`);
        }
    });
});