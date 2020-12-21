<template>

      <v-carousel
      cycle
      height="400"
      >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>

</template>

<script>
import img1 from '../../public/resources/1.png'
import img2 from '../../public/resources/3.png'
import img3 from '../../public/resources/2.png'
import img4 from '../../public/resources/4.png'
import img5 from '../../public/resources/5.png'
export default {
  name: "HomeBanner",
  data() {
    return {
      items: [
        {
          src: img4,
        },
        {
          src: img1,
        },
        {
          src: img5,
        },
        {
          src: img3,
        },
        {
          src: img2,
        },
      ],
    };
  },
};
</script>