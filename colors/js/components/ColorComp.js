
Vue.component('ColorComp', {
  props: ['color'],
  template: `
<div>

 
<div class="Intro" v-bind:style="{ backgroundImage: this.color.backgroundImg}">
<div :class='this.color.class'>
<div class="Intro-block">

<h1>{{this.color.name}}</h1>
<p>{{this.color.introText}}</p>
</div>
</div>
  <div class="container">

      <button  @click='$root.openMainColors' class="btn">
        <svg width="170px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Обратно</span>
      </button>


</div>
 </div>
<div class="Info">
<div class="Inf-block">
<img alt="" class="red-1" :src='this.color.img1'>

<div class="r">
<h2>Ассоциации</h2>
<p>{{this.color.associationText}}</p>

</div>
</div>
<div class="Inf-block">
<img alt="" class="red-2" :src='this.color.img2'>
<div class="r">
<h2>Значение&nbspв разных&nbspкультурах</h2>
<p>{{this.color.meaningText}}</p>
</div>
</div>
<div class="Inf-block">
<h2 class="usage">Использование в веб-дизайне</h2>
<p class="r text-1" >{{this.color.usageText}}</p>
</div>
 
</div>
<div class="photos">
<div class="img-wr"><img alt="" class="img-red" :src='this.color.img4'>
<img alt="" class="img-red" :src='this.color.img5'>
</div>
<div class="img-wr">
<img alt="" class="img-red img-6" :src='this.color.img6'>
<img alt="" class="img-red" :src='this.color.img7'>
</div>
</div>
 
<div class="footer" v-bind:style="{ backgroundColor: this.color.footerColor}"></div>
</div>

`
});