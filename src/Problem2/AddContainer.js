import { connect } from 'react-redux';
import AddComponent from './AddComponent';
import { increment } from './CartAction';

const mapStatetoProps=(state)=>{
    return {
        count:state
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        increment:()=>dispatch(increment())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(AddComponent)