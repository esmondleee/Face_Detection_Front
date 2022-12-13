import React, { Component } from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo'
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Registration from './Component/Registration/Registration';
import Signin from './Component/Signin/Signin';
import Rank from './Component/Rank/Rank'
import ParticlesBg from 'particles-bg';
import 'tachyons';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';



const initState = {
  
    input: '',
    imageURL: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      entries: 0,
      joined: ''
    }
  }


class App extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  componentDidMount() {
    fetch('https://facedetection-api-grpc.herokuapp.com/')
      .then(response => response.json())
      .then(data => console.log(data)) // same as console.log() 
  }

  loadUser = (data) => {
    this.setState({user: 
      {
        id: data.id,
        name: data.name,
        email: data.email,  
        password: data.password,
        entries: data.entries,
        joined: data.joined
      }
    })
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width); // image.width is a string
    const height = Number(image.height);
    
    return {
        left_col: clarifaiFace.left_col * width,
        top_row: clarifaiFace.top_row * height,
        right_col: width - (clarifaiFace.right_col * width),
        bottom_row: height - (clarifaiFace.bottom_row * height)
        
      }
  }

  displayBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    
    this.setState({imageURL: this.state.input});
    fetch('https://facedetection-api-grpc.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://facedetection-api-grpc.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
            .catch(console.log)
        }
        
        this.displayBox(this.calculateFaceLocation(response))
      })
        .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initState);
  
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({ route : route }); 
    
  }
  
  render() {
    const { route, isSignedIn, imageURL, box } = this.state; 
    return (
      
      <div className="App">
        <ParticlesBg type="circle" bg={true} id='particles-js'/>
        { route === 'home'
          ? <div>
              <Navigation onRouteChange = { this.onRouteChange } isSignedIn={ isSignedIn }
                    
              />
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
              <FaceRecognition displayBox = {this.displayBox}  box={ box } imageURL={ imageURL }/>
            </div>
          : (
              route === 'signin'
              ? <Signin onRouteChange = { this.onRouteChange } loadUser = { this.loadUser } />
              : <Registration onRouteChange = { this.onRouteChange } loadUser = { this.loadUser } />
  
            )
        }
      </div>
    );
  }
 
}

export default App;
