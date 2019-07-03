// submit a hero
$(".hero-form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
        url: "/api/add",
        method: "POST",
        data: {
            name: $("#name").val().trim()
        }
    }).then(function(result) {
        alert("Hero added!");
        location.reload();
    }).catch(function(err) {
        console.log(err);
    });
});

$(".hero-update").on("click", function(e){
    e.preventDefault();
    const heroId = $(this).attr("data-id");
    $.ajax({
        url: "/api/update/"+heroId,
        method: "PUT"
    }).then(function(result) {
        location.reload();
    }).catch(function(err) {
        console.log(err);
    });
});