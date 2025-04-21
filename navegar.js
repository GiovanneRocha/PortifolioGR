/* ESTILO GERAL */
/* borda */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* cor de fundo ----------------------------------------------------------------------------------------------------*/
body {
  background-color: black;
  height: 100vh;
}

/* interface centrada ----------------------------------------------------------------------------------------------------*/
.interface {
  max-width: 1280px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.btn-contato button {
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: #0062ff;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
}

h2.titulo {
  color: #ffffff;
  font-size: 40px;
  text-align: center;
}

h2.titulo span {
  color: #0062ff;
}

button:hover,
form .btn-enviar input:hover {
  box-shadow: 0px 0px 10px #0062ff;
  transform: scale(1.1);
}

/*  ESTILO DO CABEÇALHO ----------------------------------------------------------------------------------------------------*/

header {
  padding: 40px 4%;
}

header > .interface {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  color: #6b6b6b;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s;
}

/* zoom/luz do botão */
header a:hover {
  color: #ffffff;
  transform: scale(1.1);
}

header nav ul {
  list-style-type: none;
}

header nav ul li {
  display: inline-block;
  padding: 0 40px;
}

/* ESTILO DO TOPO DO SITE ----------------------------------------------------------------------------------------------------*/
section.topo-do-site {
  padding: 40px 4%;
}

section.topo-do-site .flex {
  align-items: center;
  justify-content: space-between;
  gap: 90px;
}

.topo-do-site h1 {
  color: #ffffff;
  font-size: 40px;
  line-height: 40px;
}

.topo-do-site h1 span {
  color: #0062ff;
  font-size: 40px;
}

.topo-do-site p {
  color: #ffffff;
  font-size: 18px;
  margin: 30px 0;
  line-height: 25px;
}

.topo-do-site .img-topo-site img {
  position: relative;
  animation: flutuar 2s ease-in-out infinite alternate;
}

@keyframes flutuar {
  0% {
    top: 0px;
  }
  100% {
    top: 40px;
  }
}

/* ESTILO DAS ESPECIALIDADES ----------------------------------------------------------------------------------------------------*/
section.especialidades {
  padding: 40px 4%;
  margin: 120px 0;
}

section.especialidades .flex {
  gap: 60px;
}

.especialidades .box-especialidade {
  color: #ffffff;
  padding: 40px;
  border-radius: 25px;
  margin-top: 50px;
  transition: 0.2s;
}

.especialidades .box-especialidade:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 20px #ffffff84;
}

.especialidades .box-especialidade i {
  color: #0062ff;
  font-size: 70px;
}

.especialidades .box-especialidade h3 {
  font-size: 25px;
  margin: 15px 0;
}

/* ESTILO DO SOBRE ----------------------------------------------------------------------------------------------------*/
section.sobre {
  padding: 80px 4%;
}

section.sobre .flex {
  align-items: center;
  gap: 60px;
}

.sobre .txt-sobre {
  color: #ffffff;
}

.sobre .txt-sobre h2 {
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 30px;
}

.sobre .txt-sobre h2 span {
  color: #0062ff;
  display: block;
}

.sobre .txt-sobre p {
  margin: 20px 0;
  text-align: justify;
}

.btn-social button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  background-color: #0062ff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 6px;
  transition: 0.2s;
}

/* ESTILO DO PORTIFÓLIO ----------------------------------------------------------------------------------------------------*/
section.portifolio {
  padding: 100px 4%;
  margin: 90px 0;
  box-shadow: 0 0 40px 10px #69696940;
}

section.portifolio .flex {
  justify-content: space-around;
  margin-top: 60px;
}

.img-port {
  width: 360px;
  height: 460px;
  background-size: cover;
  background-position: 100% 0%;
  transition: 5s;
  cursor: pointer;
  border-radius: 40px;
  position: relative;
}

.img-port:hover {
  background-position: 100% 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000918a9;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  opacity: 0;
  transition: 0.5s;
}

.overlay:hover {
  opacity: 1;
}

/* ESTILO DO CONTATO ----------------------------------------------------------------------------------------------------*/

section.formulario {
  padding: 90px 4%;
}

form {
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}

form input,
form textarea {
  width: 100%;
  background-color: #222222;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #ffffff;
  font-size: 15px;
}

form input::placeholder {
  color: #ffffff;
}

form textarea {
  resize: none;
  max-height: 200px;
}

form .btn-enviar {
  margin-top: 15px;
  text-align: center;
}

form .btn-enviar input {
  width: 150px;
  background-color: #0062ff;
  color: #000000;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}

/* ESTILO DO RODAPE ----------------------------------------------------------------------------------------------------*/

footer {
  padding: 60px 4%;
  margin: 90px 0;
  box-shadow: 0 0 40px 10px #69696940;
}

footer .flex {
  justify-content: space-between;
}

footer .line-footer {
  padding: 20px 0;
}

.borda {
  border-top: 2px solid #0062ff;
}

footer .line-footer p i {
  color: #ffffff;
  font-size: 15px;
}

footer .line-footer p a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 450;
}


/* ESTILO DO MENU MOBILE ----------------------------------------------------------------------------------------------------*/

.menu-mobile {
  background-color: #000000d2;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 112px;
  left: 0;
  width: 100%;
  height: 0;
  padding: 20px 10px;
  visibility: hidden;
  overflow: hidden;
  transition: 0.4s;
}

.menu-mobile nav a{
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  display: block;
  border-radius: 10px;
  padding: 20px 40px;
}

.menu-mobile nav a:hover{
  background-color: #0062ff18;
}

#btn-menu-mobile {
  display: none;
}




@media screen and (max-width: 1020px) {
  /* CLASSES GERAIS ---------------------------------------------------------------------------------------------------- */
  .flex {
    flex-direction: column;
  }

  h2.titulo {
    font-size: 30px;
    line-height: 30px;
  }



  /* TOPO DO SITE */

  .menu-desktop, .btn-contato {
    display: none;
  }

  section.topo-do-site .flex {
    gap: 20px;
  }

  section.topo-do-site {
    padding: 20px 8%;
  }

  .topo-do-site h1 {
    font-size: 30px;
  }

  .topo-do-site .img-topo-site img {
    width: 100%;
    height: 100%;
  }

  /* ESPECIALIDADES */
  section.especialidades {
    padding: 20px 8%;
  }

  /*SOBRE*/
  section.sobre {
    padding: 20px 8%;
  }

  .sobre .txt-sobre h2 {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }

  .btn-social{
    text-align: center;
  }

  .img-sobre img {
    width: 100%;
    height: 100%;
  }

  /* PORTIFÓLIO */
  section.portifolio {
    padding: 80px 8%;
  }

  .img-port {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;

  }
  
  section.portifolio .flex {
    gap: 50px;
  }

  /*RODAPE*/

  footer .flex {
    flex-direction: column;
    gap: 20px;
  }

  footer .line-footer {
    text-align: center;
  }
  
  /* MENU MOBILE */
  #btn-menu-mobile {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
    background-color: #0062ff00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #ffffff;
    cursor: pointer;
  }

  .menu-mobile.abrir {
    visibility: visible;
    height: 100vh;
  }

  #btn-menu{
    display: block;
  }

}
