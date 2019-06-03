This is a custom react select used in [dottori.it](https://www.dottori.it/) applications.

Installation
------------

`npm install --save fancy-react-select` or `yarn add fancy-react-select`

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
  
  render() {
  	return (
        <FancyReactSelect 
            items={this.state.cars}
            showItemsOptions={showSelectOptions}
            currentItem={this.state.currentCar}
            onSelectItemHandler={this.updateSelectedCar}
            onClickDefaultItemHandler={this.dropDownSelectOptions}
        />
      )
  }
}


export default FancyReactSelect;
```

Props
-----  

| Property | Type | Description |
| -------- | ---- | ----------- |
| `items`  | array | arrays of items |
| `currentItem` | object | the current item displayed as the select current value |
| `showItemsOptions` | boolean | if `true` the select opens and displays the options else it closes |
| `onSelectItemHandler` | function | the function called when an item is selected with the selected item as parameter |
| `onClickDefaultItemHandler` | function | this function controlls `showItemsOptions`. It's important because if there is no other option than the selected item this is where you force the select to remain closed. |


Todo
----  

- Add `propType`
- Write tests
- In-depth browser testing

Notes
-----
This is a work in progress version. Don't use it in PROD!
