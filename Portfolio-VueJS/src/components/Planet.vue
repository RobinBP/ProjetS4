<template>
  <main>
    <!-- Introduction au sujet -->
    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>Projet d'animation After Effect</h5>
            </br>
            <p>
              Ce projet d'animation avait un point notoire qui le différencie de l'animation du bateau. Il s'agit
              d'un projet que je comptais faire de zéro, avec un minimum de recherche et en me basant un maximum
              sur mes connaissances du logiciel. Je me suis également imposé un temps limite de 4 heures. Maintenant,
              il ne reste plus qu'à trouver un sujet et l'animer. J'ai toujours été intéressé par l'espace et le film Interstellar
              fait probablement partie de mes 5 films préférés que j'ai regardé en boucle. Mon thème choisit et mes règles fixées,
              il est temps de passer au travail.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Brainstorming -->
    <div class="container11">
      <div class="box" style="height: 150px;">
        <div class="contenu">
          <div class="textbx">
            <p>
              La brainstorming du projet n'était pour le coup pas très important, l'objectif ici, c'est la sélection d'idées.
              Qu'est-ce que je vais faire ? Comment vais-je l'animer ? etc. </br>
              Après une dizaine de minutes de recherche, j'avais sélectionné comment faire mon projet et quoi faire :
            </p></br>

            <h5>Une planète au style réaliste avec une animation de son atmosphère.</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Monter les étapes ? -->
    <div class="container10">

      <!-- Etape 3 -->
      <div class="box">
        <div class="contenu">
          <img src="@/assets/img/Animation/planet/img5.png">
        </div>
      </div>

      <!-- Etape 4 -->
      <div class="box">
        <div class="contenu">
          <img src="@/assets/img/Animation/planet/img4.png">
        </div>
      </div>

    </div>
    <div class="container10">

      <!-- Etape 5 -->
      <div class="box">
        <div class="contenu">
          <img src="@/assets/img/Animation/planet/img3.png">
        </div>
      </div>

      <!-- Etape 6 -->
      <div class="box">
        <div class="contenu">
          <img src="@/assets/img/Animation/planet/img2.png">
        </div>
      </div>

    </div>
    <div class="container10">

      <!-- Etape 7 -->
      <div class="box">
        <div class="contenu">
          <img src="@/assets/img/Animation/planet/img1.png">
        </div>
      </div>

    </div>

    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <p>
              Contrairement au projet d'animation du bateau, celui-ci prends bien moins de temps de par les
              règles que je me suis fixé.
            </p></br>

            <p>
              Le projet a été réalisé sur 2 parties majeures : le fond, et l'objet principale. Dans l'ensemble, les
              deux éléments sont des images, ou vidéos que je vais manipuler via différents effets, notamment
              pour les distordres ou bien encore changer leur couleur ou leur luminosité.
            </p></br>

            <p>
              Les vidéos et images que j'ai pu sélectionner sont issue du Nebula pack de RocketStock et contient de
              superbes vidéos qui peuvent offrir des rendus extraordinaire pour le style sci-fi (sciences-fiction).
              </br>
              J'ai donc utilisé un élément pour faire le fond, que je modifie avec des effets (couleurs / dynamique / etc.)
              Et un pour faire la planète.
            </p></br>

            <p>
              Pour la confection de la planète, c'est un objet sphère (ou cercle) avec la vidéo ou l'image en alpha pour recouvrir
              le cercle. Pour rendre la planète plus réaliste, on applique la couche alpha sur l'objet comme si elle
              recouvrait la sphère, donnant plus de profondeur. Pou conclure le projet, j'ai rajouté plusieurs layers
              d'animation autour de la planète pour créer une atmosphère, des nuages, etc.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Résultat final et difficultés rencontrées -->
    <!-- Difficultés -->
    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>Problèmes Recontrés</h5>
            </br>
            <p>
              Je n'ai pas vraiment rencontré de problème au cours du projet. En effet l'objectif était de réaliser
              ce dernier à l'aide de mes connaissances et de ce que je maîtrisais majoritairement, limitant donc les soucis.
              Les seuls petits points gênant étaient la gestion de la couche alpha avec laquelle j'avais encore unpeu de mal mais surtout
              les performances de mon ordinateur au moment de la réalisation qui ont rendu la tâche bien plus dur, surtout pour
              visualiser le travail que j'étais en train de faire.
            </p></br>

            <p>
              Pour ce qui est du reste, je pense ne pas me tromper si je dis que cela c'est déroulé sans accroc.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Résultat final -->
    <div class="container9">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <video  preload="auto" autoPlay loop="loop" autoplay style="width: 750px; height: 500px;">
              <source src="static/planet.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>


    <!-- Conclusion projet -->
    <div class="container9">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>Un challenge personnel</h5></br>

            <p>
              Ce projet est pour moi quelque chose qui me tiens à coeur car l'un de mes premiers travaux en
              autonomie de A à Z où je me dicte moi-même ce qu'il faut et ce que je veux faire. Mais c'est également
              une animation que je trouve vraiment intéressante dans sa réalisation technique.
            </p></br>

            <p>
              À contrario du projet d'animation du bateau, ce dernier à donc demandé bien moins de travail mais ce n'est pas
              pour autant que j'en suis moins fier, bien au contraire c'est l'un des projets personnels que j'ai pu
              réaliser dont je suis le plus fier encore aujourd'hui.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Planet"
}
</script>

<style scoped>

</style>
