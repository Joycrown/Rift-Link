import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
  toggleChange = () => {
      this.setState({
          isChecked: true
      })
  }
  handleSubmit = () => {
      if( this.state.country === " "){
          alert("Select Country")
      } else if (this.state.region === " "){
          alert(" Select State")
      }else{
          this.props.onsubmit({
              country: this.state.country,
              state: this.state.region
          })
      }
      
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
          <CountryDropdown className ='mb-5'
            id='country'
            defaultOptionLabel="Select a country"
            value={country}
            onChange={(val) => this.selectCountry(val)} />
            <RegionDropdown
            className ='mb-4'
            id= 'country'
            blankOptionLabel="No country selected."
            defaultOptionLabel="Now select a region"
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)} />
     
      </div>
    );
  }
}
export default Example;