$(() => {

    $.get("/Home/CookieSessionDegisimi", (e) => {
       
        $("#sepetCounter").html(e);
    });
});
