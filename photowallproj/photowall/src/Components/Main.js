import Title from "./Title";
import Photowall from "./PhotoWall";
import { Component } from "react";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom';

class Main extends Component {
  state = {
    posts: [
      {
        id: "0",
        description: "beautiful landscape",
        imageLink:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg",
      },
      {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
      },
      {
        id: "2",
        description: "On a vacation!",
        imageLink:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
      },
    ],
    count: 0,
    screen: "photos",
  };

  removePhoto = (photo, index) => {
    //<<Approach 1>>
    //console.log(`index is ${index} and photoId is ${photo.id}`);
    // const temp = [...this.state.posts];
    // temp.splice(index, 1);
    // this.setState({ posts: temp });

    //<<Approach 2>>
    const temp = [...this.state.posts];
    let filtered = temp.filter((x) => x.id !== photo.id);
    this.setState({ posts: filtered });
  };

  componentDidMount() {
    //console.log('<<<componentDidMount>>>');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("currentState", this.state);
  }

  navigateTo = () => {
    console.log('navigateTo>>',this.state);
    this.setState({
      screen: "addPhoto"
    });
  }

  render() {
    //console.log('<<<Render>>>');
    return (
      <div>
        {this.state.screen === "photos" && (
          <div>
            <Title title="Photowall" />
            <Photowall
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
              navigateTo = {this.navigateTo}
            />
          </div>
        )}
        {this.state.screen === "addPhoto" && (
          <div>
            <AddPhoto />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
