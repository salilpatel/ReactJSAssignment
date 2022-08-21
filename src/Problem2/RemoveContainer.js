/* RemoveContainer */
import { connect } from 'react-redux';
import RemoveComponent from './RemoveComponent';
import { decrement } from './CartAction';

const mapStatetoProps=(state)=>{
    return {
        count:state
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        decrement:()=>dispatch(decrement())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(RemoveComponent)