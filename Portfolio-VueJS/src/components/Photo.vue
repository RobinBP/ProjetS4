<template>
  <main>
    <!-- Paragraphe pour parler de photo plus mentionner l'effet hover -->
    <div class="container11">
      <div class="box">
        <div class="contenu">
          <div class="textbx">
            <h5>Album photographie</h5>
            <p>
              Trouvez un panel de photos que j'ai pu faire durant ces derniers mois. N'hésitez pas à passer votre souris sur
              les images pour découvrir une animations qui dévoilera une seconde photo en rapport avec la première.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Groupe de photo avec le GL hover effect -->
    <div class="container7">
      <div class="photo">
        <img src="@/assets/img/Photo/img1.jpg">
        <img src="@/assets/img/Photo/img2.jpg">
      </div>
      <div class="photo">
        <img src="@/assets/img/Photo/img3.jpg">
        <img src="@/assets/img/Photo/img4.jpg">
      </div>
      <div class="photo">
        <img src="@/assets/img/Photo/img7.jpg">
        <img src="@/assets/img/Photo/img8.jpg">
      </div>
      <div class="photo">
        <img src="@/assets/img/Photo/img10.jpg">
        <img src="@/assets/img/Photo/img9.jpg">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Photo",

  mounted() {
    Array.from(document.querySelectorAll('.photo')).forEach((e) => {
      const imgs = Array.from(e.querySelectorAll('img'));

      new hoverEffect({
        parent: e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'static/1.jpg'
      });
    })
  }
}
</script>

<style scoped>

</style>
