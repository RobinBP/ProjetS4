<template>
  <main>
    <!-- Container Paragraphe 1 -->
    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>lunastral.fr</h5>
            <p>Le site Portfolio de Robin BLONDEAU-PATISSIER.</p>
            </br>
            <p>
              Retrouvez une grande partie de mes projets, personnels, scolaires ou bien encore professionnels
              mais apprenez aussi qui je suis et quels sont mes compétences.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Container Redirecting Projets -->
    <div class="container3">

      <!-- Présentation et Compétences -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img1.jpg"></div>
          <div class="textbx">
            <h5>Robin</br>Blondeau-Patissier</h5>
            </br>
            <p>Qui suis-je, quel est mon parcours scolaire et professionnel et quels sont mes compétences.</p>
          </div>
          <div class="bouton">
            <router-link to="/aboutme" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- BOSS S3 -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img2.jpg"></div>
          <div class="textbx">
            <h5>Site Examen MMI-S3</h5>
            </br>
            <p>Projet où j'ai débuter ma progression dans le développement Web. Ce projet est la racine qui m'a
              permis d'atteindre mon niveau actuel.</p>
          </div>
          <div class="bouton">
            <router-link to="/boss" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Communication LinkedIn -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img3.jpg"></div>
          <div class="textbx">
            <h5>Dossier Temporalité-Twitch</h5>
            </br>
            <p>
              Projet universitaire en équipe, j'ai pu y apprendre la façon d'analyser les réseaux sociaux lié
              à une entreprise ou en établissement et tirer des réagir à ces dernières.
            </p>
          </div>
          <div class="bouton">
            <router-link to="/com" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Logo et Illustrations -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img4.jpg"></div>
          <div class="textbx">
            <h5>Logos et Illustrations</h5>
            </br>
            <p>Vous pourrez retrouver sur ce blog un partie de les meilleures illustrations mais aussi logos.</p>
          </div>
          <div class="bouton">
            <router-link to="/design" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Photographies -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img5.jpg"></div>
          <div class="textbx">
            <h5>Photographies</h5>
            </br>
            <p>Retrouvez une partie des mes photos shoots ainsi que des édits.</p>
          </div>
          <div class="bouton">
            <router-link to="/photo" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Animation AE Bateau -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img6.jpg"></div>
          <div class="textbx">
            <h5>After Effect : Parallaxe et Bateau</h5>
            </br>
            <p>Une des réalisation qui m'a demandé le plus de temps, Apprenez en plus sur ce sujet ici.</p>
          </div>
          <div class="bouton">
            <router-link to="/boat" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Site Portfolio -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img7.jpg"></div>
          <div class="textbx">
            <h5>Site Portfolio</h5>
            </br>
            <p>Dernier projet que j'ai pu faire, il montre ma progression autant en Développement Web qu'en design.
              Il s'agit probablement de mon projet le plus abouti.</p>
          </div>
          <div class="bouton">
            <router-link to="/portfolio" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

      <!-- Animation AE Planète -->
      <div class="box">
        <div class="contenu">
          <div class="imgbx"><img class="img1" src="@/assets/img/img8.jpg"></div>
          <div class="textbx">
            <h5>After Effect : Planète</h5>
            </br>
            <p>L'un de mes premiers projets en autonomie et sans règle, découvrez comment j'ai réalisé cet création en détail.</p>
          </div>
          <div class="bouton">
            <router-link to="/planet" class="button"><span>More Content</span></router-link>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
