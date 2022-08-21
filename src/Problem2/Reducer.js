/* Reducer */
const reducer=(count=0,action)=>{
    if(action.type==='INCREMENT'){
        return count+1
    }
    else if(action.type==='DECREMENT'){
        if(count===0){
            return count
        }
        else return count-1
    }
}
export default reducer
