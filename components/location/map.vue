<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Jl.%20Raya%20Uluwatu,%20Ungasan,%20Kec.%20Kuta%20Sel.,%20Kabupaten%20Badung,%20Bali%2080361&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe
      ><a href="https://embedgooglemap.net/maps/59"></a><br /><style>
        .mapouter {
          position: relative;
          text-align: right;
          height: 340px;
          width: 460px;
        }</style
      ><style>
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 340px;
          width: 460px;
        }
      </style>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
}
</script>

<style scoped>
.gmap_canvas {
  margin: 0 auto;
  width: auto;
}
iframe {
  width: 100%;
  height: 300px;
}
</style>
