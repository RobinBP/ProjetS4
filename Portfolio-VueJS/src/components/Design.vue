<template>
  <main>
    <!-- Paragraphe pour parler d'img plus mentionner l'effet hover -->
    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>Album Illustrations et Logos</h5>
            <p>
              Sur cette page s'affiche une partie de mes créations, que ceux-ci soient des dessins, des Illustrations plus
              détaillées ou bien encore de simple logo, pour des projets ou lorsque de moment de crréation libre.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Groupe d'img avec le GL hover effect -->
    <div class="container7">
      <div class="photo">
        <img src="@/assets/img/Design/img1.png">
        <img src="@/assets/img/Design/img2.jpg">
      </div>
      <div class="photo">
        <img src="@/assets/img/Design/img3.jpg">
        <img src="@/assets/img/Design/img4.png">
      </div>
      <div class="photo">
        <img src="@/assets/img/Design/img5.png">
        <img src="@/assets/img/Design/img6.png">
      </div>
      <div class="photo">
        <img src="@/assets/img/Design/img7.png">
        <img src="@/assets/img/Design/img8.gif">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Design",

  mounted() {
    Array.from(document.querySelectorAll('.photo')).forEach((e) => {
      const imgs = Array.from(e.querySelectorAll('img'));

      new hoverEffect({
        parent: e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'static/4.jpg'
      });
    })
  }
}

</script>

<style scoped>

</style>
