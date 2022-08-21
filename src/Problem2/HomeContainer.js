/* HomeContainer */

import { connect } from 'react-redux';
import CartComponent from './CartComponent';

const mapStatetoProps=(state)=>{
    return {
        count:state
    }
}

export default connect(mapStatetoProps)(CartComponent)