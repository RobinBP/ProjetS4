<template>
  <div id="app">
    <header>
      <!-- Container Nav Bar + Title -->
      <div class="container1">
        <div class="nav">
          <span style="--i:0; --x:0; --y:0"><router-link to="/"><ion-icon name="home-outline"></ion-icon></router-link></span>
          <span style="--i:1; --x:-1; --y:0"><router-link to="/design"><ion-icon name="images-outline"></ion-icon></router-link></span>
          <span style="--i:2; --x:-1; --y:1"><router-link to="/boat"><ion-icon name="boat-outline"></ion-icon></ion-icon></router-link></span>
          <span style="--i:3; --x:1; --y:0"><router-link to="/photo"><ion-icon name="camera-outline"></ion-icon></router-link></span>
          <span style="--i:4; --x:1; --y:1"><router-link to="/planet"><ion-icon name="planet-outline"></ion-icon></router-link></span>
          <span style="--i:5; --x:0; --y:1"><router-link to="/portfolio"><ion-icon name="desktop-outline"></ion-icon></router-link></span>
          <span style="--i:6; --x:1; --y:-1"><router-link to="/com"><ion-icon name="mail-unread-outline"></ion-icon></router-link></span>
          <span style="--i:7; --x:0; --y:-1"><router-link to="/boss"><ion-icon name="browsers-outline"></ion-icon></router-link></span>
          <span style="--i:8; --x:-1; --y:-1"><router-link to="/aboutme"><ion-icon name="person-outline"></ion-icon></router-link></span>
          <h1 class="luna">lunastral.fr</h1>
        </div>
      </div>
    </header>

    <router-view/>

    <footer class="footer">
      <div class="container4">
        <div class="row">
          <div class="footer-column">
            <h4>Réseaux Sociaux</h4>
            <ul class="inline">
              <li><a href="#"><ion-icon size="large" name="logo-instagram"></ion-icon></a></li>
              <li><a href="#"><ion-icon size="large" name="logo-discord"></ion-icon></a></li>
              <li><a href="#"><ion-icon size="large" name="logo-linkedin"></ion-icon></a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Mail</h4>
            <ul>
              <li><a href="mailto:robin.blondeaup@mail.com"><ion-icon size="large" name="mail-outline"></ion-icon></a></li>
              <li><a href="mailto:robin.blondeaup@gmail.com">robin.blondeaup@mail.com</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Téléphone</h4>
            <ul>
              <li><a href="#"><ion-icon size="large" name="call-outline"></ion-icon></a></li>
              <li><a href="#">+33 (0) 6.98.94.63.42</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Mentions Légales</h4>
            <ul>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Politique de Confidentialité</a></li>
              <li><a href="#">Cookies</a></li>
              <li>© 2022 - lunastral.fr</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    let navigation = document.querySelector('.nav');
    navigation.onclick = function () {
      navigation.classList.toggle('active')}
  }
};

</script>

<style>

</style>
