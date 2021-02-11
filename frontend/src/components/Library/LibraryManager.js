import {connect} from 'react-redux'
import Library from './index'

const mapStateToProps = (state) => ({
    library: state.library
    
})

const mapDispatchToProps = (dispatch) => ({
    'example':null
})

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
)(Library)