import Photo from "./Photo";

const Photowall = (props) => (
  <div>
    <button className='addIcon'>+</button>
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
