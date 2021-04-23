<template>
  <div  style="position:relative">
      <input type="text" 
        @focus="showOptions=true"
        @blur="showOptions=false"
        @keydown="keyEvents($event)"
        v-model="searchFilter"
        :style="{width:width,height:height,padding:padding}"
        placeholder="slot"
        >
        <div style="position:absolute;left:50%;">
        <div v-show="filteredOptions.length && showOptions" class="drop-down" :style="{width:width}" ref="dropdown">
            <div v-for="(opt,i) in filteredOptions" :key="i" :class="{focus:i==eArr}" @mousedown="selectEvent(opt)">{{opt}}</div>
        </div>
        </div>
        <!-- {{searchFilter}} -->
        
        <!-- {{filteredOptions}} -->
        <!-- {{eArr}} -->
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:'',
        },
        items:{
            type:Array,
            required:true
        },
        width:{
            type:String,
            default:'300px'
        },
        height:{
            type:String,
            default:'20px'
        },
        padding:{
            type:String,
            default:'2px'
        }

    },
    data () {
        return {
            searchFilter:this.value,
            showOptions:false,
            
            options:Object.keys(this.$store.state.slots),
            eArr:0,
            
        }
    },
    

    methods: {
        selectEvent(c){
            this.searchFilter=c
            this.$emit('input',c)
            this.$emit('select',c)
        },
        exit(){
            this.showOptions=false;
            if(!this.filteredOptions.length) this.searchFilter=''
        },
        keyEvents(e){
            console.log(e)
            
            
            if (e.key === "Enter" && this.filteredOptions[0])
                {   
                    this.$emit('select',this.filteredOptions[this.eArr])
                    this.$emit('input',this.filteredOptions[this.eArr])
                    this.searchFilter=''
                }
            
            if( e.key==='ArrowDown')
            {
                
                this.eArr=(this.eArr+1)%this.filteredOptions.length
                
            }
            if( e.key==='ArrowUp')
                {
                    if(this.eArr==0)
                    {
                    this.eArr=this.filteredOptions.length
                    
                    }
                    
                    this.eArr=(this.eArr-1)%this.filteredOptions.length
                }
                
                this.$refs.dropdown.scrollTop=19*(this.eArr)
            
            
        },
        
    
    },
        computed: {
            filteredOptions(){
            
            // if(this.searchFilter.length==0)return this.items
            
            // console.log('as')
            let re=new RegExp(this.searchFilter, 'gi')
            let result=[]
            for (const option of this.items) {
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
    box-shadow: 0px 3px 3px 1px rgb(197, 196, 196);
    border-bottom-left-radius :7px ;
    border-bottom-right-radius :7px ;
    height: 222px;
    
    
    left: -50%;
    background: #ffff;
    overflow-y: scroll;
    
    position: relative;
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
    margin-left:10px ;
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #f1f1f1; */
  
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 

}
</style>
