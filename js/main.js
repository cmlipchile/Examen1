$(document).ready(function(){

  if(window.location.href.indexOf("index") > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    }

      // Posts
      if(window.location.href.indexOf("index") > -1){
        var posts = [
          {
            title: "Prueba de titulo 1",
            date: moment().format("MMM ddd YYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            title: "Prueba de titulo 2",
            date: "Publicado el dia " + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            title: "Prueba de titulo 3",
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            title: "Prueba de titulo 4",
            date: new Date(),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            title: "Prueba de titulo 5",
            date: new Date(),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ];
        
        posts.forEach((item, index) => {
          var post = `
              <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
                </article>
          `;

          $("#posts").append(post);
        });
      }

      //Selector de tema

      var theme = $("#theme");

      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
      });

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });

      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });

      //Scroll arriba de la web

      $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
          scrollTop: 0
        }, 500);
        
        return false;
      });

      //Login falso

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        var form_email = $("#form_email").val();
        var form_password = $("#form_password").val();

        localStorage.setItem("form_name", form_name);
        localStorage.setItem("form_email", form_email);
        localStorage.setItem("form_password", form_password);

      });

      var form_name = localStorage.getItem("form_name");
      var form_email = localStorage.getItem("form_email");
      var form_password = localStorage.getItem("form_password");

      if(form_name != null || form_name != undefined){
        var about_parrafo = $("#about p");

        $("#about p").html("<br> <strong> Benvenido, "+ form_name +"</strong>");
        about_parrafo.append("<br> <a href='#' id='logout'>Cerrar sesion </a>");

        $("#login").hide();

        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        });
      }

      // Acordeon
      if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
      }

      // Reloj
      if(window.location.href.indexOf("reloj") > -1){
        setInterval(function(){
          var reloj = moment().format("h:mm:ss");
          $("#reloj").html(reloj);
        }, 1000);
      }

      // Validacion
      if(window.location.href.indexOf("contact") > -1){
        $("form input[name='date']").datepicker({
          dateFormat: "dd-mm-yy"
        });
        $.validate({
          lang: "es",
          errorMessagePosition: "top",
          scrollToTopOnerror: "true"
        });
      }

});

