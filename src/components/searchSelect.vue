<template>
  <div  >
      <input type="text" 
        @focus="showOptions=true"
        @blur="showOptions=false"
        @keydown="keyEvents($event)"
        v-model="searchFilter"
        placeholder="slot"
        >
        <div v-show="showOptions" @click="chk('sss')" class="drop-down">
            <div v-for="(opt,i) in filteredOptions" :key="i" :class="{focus:i==eArr}" @mousedown="searchFilter=opt">{{opt}}</div>
        </div>
        <!-- {{searchFilter}} -->
        
        {{eArr}}
  </div>
</template>

<script>
export default {
    data () {
        return {
            searchFilter:'',
            showOptions:false,
            
            options:Object.keys(this.$store.state.slots),
            eArr:0,
            
        }
    },
    created () {
      console.log(Object.keys(this.$store.state.slots))
    },

    methods: {
        chk(s){
            console.log(s)
        },
        exit(){
            this.showOptions=false;
            if(!this.filteredOptions.length) this.searchFilter=''
        },
        keyEvents(e){
            console.log(e)
            
            
            if (e.key === "Enter" && this.filteredOptions[0])
                this.searchFilter=this.filteredOptions[this.eArr]
            
            if( e.key==='ArrowDown')
                this.eArr=(this.eArr+1)%this.filteredOptions.length
            if( e.key==='ArrowUp')
                {
                    if(this.eArr==0)
                    this.eArr=this.filteredOptions.length
                    this.eArr=(this.eArr-1)%this.filteredOptions.length
                }
                
                
            
        },
        
    
    },
        computed: {
            filteredOptions(){
            
            if(!this.searchFilter.length)return this.options
            
            console.log('as')
            let re=new RegExp(this.searchFilter, 'gi')
            let result=[]
            for (const option of this.options) {
                if (option.match(re))
                    result.push(option)
            }
            console.log(result)
            return result
            },
        },
        watch: {
            filteredOptions(){
                 this.eArr=0
            }
        }
    
}
</script>

<style>
.drop-down{
    box-shadow: 1px 1px 1px rgb(197, 196, 196);
    border-bottom-left-radius :7px ;
    border-bottom-right-radius :7px ;
    height: 92px;
    overflow-y: scroll;;
}

.drop-down div:last-child{
    border-bottom-left-radius :7px ;
    border-bottom-right-radius :7px ;
}
.drop-down div:hover{
    background: rgb(230, 230, 230);
}
.focus{
    background: rgb(226, 225, 225);
    
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
