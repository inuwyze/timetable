<template>
     <div class="modal-mask" @click='closeCard' v-show="show">
          <div class="modal-container" @click.stop :class="{'rotate':rotate}">
            <slot></slot>
            
          </div>
      </div>
</template>

<script>

export default {
    name:'modal',
    props: {
        value:{
        type:Boolean,
        required:true
        },
        rotate: {
        type: Boolean,
        default: false
        },
    },
   computed: {
     show(){
         return this.value
     }  
   },
    methods: {
        // ...mapMutations(['closeCard'])
        closeCard(){
            console.log('close')
            // this.show=false
            this.$emit('input',false)
        }

    }
}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
}
.modal-container{
    background: white;
    /* scroll-padding:20px; */
    /* min-height: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow: auto; */
    
    /* overflow-y:invisible; */
    border-radius:10px ;
}
/* .modal-container:after {
  content: "";
  display: block;
  height: 50px;
  width: 100%;
} */
.rotate{
    transform: rotate(-90deg);
}

</style>