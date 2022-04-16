import { Text, View, SafeAreaView, Button } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBindingStyles'

/* 
    Thread: 
        Main Thread (Xuat ra giao dien)
        Worker Thread (Chuyen xu li code: callback function)
*/
const data = [
    "Gia Tri 1",
    "Gia tri 2",
    "Gia tri 3"
]

export default class DataBindingScreen extends Component {
  name = "Nguyen Van A"
  soA = 1
  soB = 5
  state = {
    tinhTong: 0,
    isRenderHelloES7: true
  }

  renderArray = () => {
      return data.map((value, index) => (
        <Text>{value}</Text>
      ));
  }

  renderHello = () => {
      if(this.state.isRenderHelloES7) {
        return this.renderHelloES7()
      }else {
          return this.renderHelloReact()
      }
  }

  renderHelloReact = () => {
    return <Text> Render Hello React</Text>
  }

  renderHelloES7 = () => {
    return <Text> Render Hello ES7</Text>
  }
  
  onPressSignIn = () => {
    this.setState({isRenderHelloES7: !this.state.isRenderHelloES7})
  }

  onTinhTong = () => {
    ketQua = this.soA + this.soB
    console.log(ketQua)
    this.setState({tinhTong: ketQua}, () => {
        console.log(ketQua)
    })
  }

  render() {
    return (
      <SafeAreaView>
        <Text> {this.name} </Text>
        <Button
            title = "SIGN IN"
            color= "#841584"
            onPress={this.onPressSignIn}
        > </Button>
        <Button
            title = "Tinh tong"
            color= "#841584"
            onPress={this.onTinhTong}
        ></Button>
        {this.state.isRenderHelloES7 ? <Text>True</Text> : <Text>False</Text>}
        {this.renderArray()}
      </SafeAreaView>
    )
  }
}