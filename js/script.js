function mostrarMenu() {
  $("header nav#nav-esq ul#menu-principal").css("display", "flex");
  $("header nav#nav-esq ul#menu-principal").addClass(
    "animate_animated animate_fadeInRight animate_slow"
  );

  $("header nav#nav-esq ul#icone-menu li#menu").css("display", "none");
  $("header nav#nav-esq ul#icone-menu li#menuX").css("display", "flex");
}

function esconderMenu() {
  $("header nav#nav-esq ul#menu-principal").css("display", "none");

  $("header nav#nav-esq ul#icone-menu li#menu").css("display", "flex");
  $("header nav#nav-esq ul#icone-menu  li#menuX").css("display", "none");
}

//chamar função
let controle = true;

$("header nav#nav-esq ul#icone-menu").click(function () {
  if ((controle = true)) {
    //pra dizer que a função mostrarrMenu é true
    mostrarMenu();
    controle = false; // passa a false pq ele tem que se preparar para chamar de novo
  } else {
    esconderMenu();
    controle = true;
  }
});