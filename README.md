This is a custom select used in [dottori.it](https://www.dottori.it/) applications

Installation
------------

`npm install --save fancy-react-select` or with yarn `yarn add fancy-react-select`  

Usage
-----

```javascript
import React, {Component} from 'react';
import FancyReactSelect from "fancy-react-select";

class ShowCarsComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fancyCars: [
        {id: 1, name: "Tesla"}, 
        {id: 2, name: "Bugatti"},
        {id: 3, name: "Lamborghini"},
        {id: 4, name: "Ferrari"}
      ],
      currentCar: {id: 2, name: "Bugatti"},
      showSelectOptions: false
    }
    
    this.updateSelectedCar = this.updateSelectedCar.bind(this);
    this.dropDownSelectOptions = this.dropDownSelectOptions.bind(this);
  }
  
  updateSelectedCar(selectedCar) {
    this.setState({
      currentCar: selectedCar
      showSelectOptions: false
    });
  }
  
  dropDownSelectOptions(selectOptions) {
    if (selectOptions.length === 0) return false;
    
    this.setState({
      showSelectOptions: !this.state.showSelectOptions
    });
  }
  
  return (
    <FancyReactSelect 
        items={this.state.cars}
        showItemsOptions={showDoctorsOptions}
        currentItem={this.state.currentCar}
        onSelectItemHandler={this.updateSelectedCar}
        onClickDefaultItemHandler={this.dropDownSelectOptions}
    />
  )
}


export default FancyReactSelect;
```
