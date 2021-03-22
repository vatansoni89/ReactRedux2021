const Photo = (props) => (
  <figure>
    <img
      className="photo"
      src={props.post.imageLink}
      alt={props.post.description}
    ></img>
    <figcaption>
      <p>{props.post.description}</p>
    </figcaption>
    <div className="button-container">
      <button className="" onClick = {()=>props.onRemovePhoto(props.post, props.index)}>Remove</button>
    </div>
  </figure>
);

export default Photo;
