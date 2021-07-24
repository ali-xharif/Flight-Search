import React,{Component} from 'react';
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-key': '1d6a59aeef1mshc9755a845626d4fp1f9cafjsn95cedbdc3a340',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};


export default class Places extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }
  componentDidMount(){
    axios.request(options).then(response => {
      //console.log(response.data.Places);
      this.setState({places: response.data.Places});     
    }).catch(function (error) {
      console.error(error);
    });
  }
  render(){
    return(
      <select>
        {this.state.places.map(place => <option key={place.PlaceId}>{place.PlaceName}</option>)}
      </select>
    );
  }

}
