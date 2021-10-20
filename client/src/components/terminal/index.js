import './style.css';
import Cursor from '../cursor/';
const Terminal = (props)=> {
    return (
        <div style={props.display} className='centered-box'>
                <Cursor/>
        </div>
    )
}
export default Terminal;