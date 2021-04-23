
let courses=null
let assigned={}
let ass={}
const cls=require('./clashes.json')    
export function generator(c){
    
    
    courses=c   
    while(Object.keys(courses).length)
    {

        let minL=check_courses()
        if(!minL)
        {assigned={}
        break
        }
        if(Object.keys(courses).length==0)
            break
        rnd_pick(minL)
    }
    
    console.log(assigned)
    return assigned
}
// generator({   
//     0:['S1','S2','S6','S7'],
//     1:['S1','S7'],
//     2:['S1','S2','S3','S4'],
//     3:['S1','S2','S7'],
//     4:['S8'],
//     5:['S7'],
//     6:['L15'],
// })

function chk_dept(){
    let single_depth={}
    let minL=999
    // console.log(courses)
    if(!courses)
        return [{},0]
    
        for(let x in courses){

            minL=Math.min(courses[x].length,minL)
            if(courses[x].length==1)
            {
                if(Object.values(single_depth).includes(courses[x][0]))

                    return false
                single_depth[x]=courses[x][0]
            }
            
        }
    // console.log(single_depth,minL)
    return [single_depth,minL]

}

function remove_assigned_courses(){
    for(let x in ass)
        delete courses[x]
}

function remove_assigned_slots(){
    let clash_slot=new Set()
    // console.log(Object.values(ass))
    for(let x of Object.values(ass)){
        clash_slot=new Set([...clash_slot,...cls[x]])
    }
    clash_slot=new Set([...clash_slot,...Object.values(ass)])
    
    // console.log(clash_slot)
    for(let x in courses){
        courses[x]=courses[x].filter(slt=>!clash_slot.has(slt))
    }
    
}

function check_courses(){
    let minL
    let bol=true
    while(bol){
    try {
        [ass,minL]=chk_dept()  
        
        // console.log(ass)
    } catch (error) {
        console.log(error)
        return false
    }
    if (!Object.keys(ass).length)
        break
    remove_assigned_courses()
    remove_assigned_slots()
    assigned={...assigned,...ass}
    
     
    }
    return minL
}

function rnd_pick(minL){
    let [course,slt]=[0,0]
    let rc=0
    var keys = Object.keys(courses);
    console.log(courses)
    while(courses){
        
        rc=keys[Math.floor(Math.random()*keys.length)]
        console.log(rc)
            if(courses[rc].length==minL){
                course=rc
                slt=courses[rc][Math.floor(Math.random()*courses[rc].length)]
                break
            }
    }
    
    ass={[course]:slt}
    remove_assigned_courses()
    remove_assigned_slots()
    assigned={...assigned,...ass}
}
