import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ProductComponent from './components/ProductComponent';
import HeaderComponent from './components/HeaderComponent';


export default class App extends Component {
  render() {
    return (
      <View>
        <HeaderComponent title = "Create Product"/>
        <ProductComponent/>
      </View>
    )
  }
}
