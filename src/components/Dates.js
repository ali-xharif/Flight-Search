import React,{Component} from 'react';
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2022-09-01',
  params: {inboundpartialdate: '2022-12-01'},
  headers: {
    'x-rapidapi-key': 'd6a59aeef1mshc9755a845626d4fp1f9cafjsn95cedbdc3a34',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};


export default class Dates extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }
  componentDidMount(){
    axios.request(options).then(response => {
      console.log(response.data.Dates.OutboundDates);
      //this.setState({places: response.data.Dates});     
    }).catch(function (error) {
      console.error(error);
    });
  }
  render(){
    return(
      <select>
        {this.state.dates.map(place => <option key={place.PlaceId}>{place.PlaceName}</option>)}
      </select>
    );
  }

}
