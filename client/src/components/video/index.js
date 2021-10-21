
import './style.css';
// import sample from './FromPolitical.mp4';

const Video = (props)=> {
    return(
        
        <div  >
        <video className='videoTag' autoPlay loop muted>
        <source src={props.sample} type='video/mp4' />
    </video>
   
      

        </div>
    )
}
export default Video;