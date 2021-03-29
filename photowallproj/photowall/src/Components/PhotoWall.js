import Photo from "./Photo";
import {Link} from 'react-router-dom';

const Photowall = (props) => (
  <div>
    <Link className='addIcon' onClick={props.navigateTo} to='/AddPhoto'></Link>
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo
          post={post}
          key={index}
          index={index}
          onRemovePhoto={props.onRemovePhoto}
        />
      ))}
    </div>
  </div>
);

export default Photowall;
