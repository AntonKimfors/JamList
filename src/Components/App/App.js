import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PlayList from '../PlayList/PlayList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResult: [{name: "Love is in the air", artist: "Anton", album:"Single", id:"LS1"},{name: "Love is in the air", artist: "Anton", album:"Single", id:"LAS1"}],
      playlistName: "De vet du",
      playlistTracks: [{name: "Love is in the ai", artist: "Anton", album:"Single", id:"LS1"},{name: "Love is in the air", artist: "Anton", album:"Single", id:"LAS1"}],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }else{
      let array = this.state.playlistTracks;
      array.push({name: track.name, artist: track.artist, album: track.album, id: track.id});
      this.setState({playlistTracks: array});
    }
  }

  removeTrack(track){
      let array = this.state.playlistTracks;
      let index = this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id);
      array.splice(index,1);
      this.setState({playlistTracks: array})
  }


  render() {
    return (
      <div>
        <h1>Jam<span className="highlight">List</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResult} onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
