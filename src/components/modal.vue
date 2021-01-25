<template>
     <div class="modal-mask" @click='closeCard' v-if="show">
          <div class="modal-container" @click.stop>
            <slot></slot>
            {{show}}
          </div>
      </div>
</template>

<script>

export default {
    name:'modal',
    props: ['value'],
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
.chead2{
  margin: 5px;
}
.g span{
  justify-self: start;
}
.g{
  display: grid;
  width: 50%;
  grid-template-columns:  50% 25% 25%;
  
}
.modal-mask {
    position: fixed;
    z-index: 9998;
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
    padding:25px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>