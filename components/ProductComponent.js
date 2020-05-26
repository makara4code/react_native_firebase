import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';

import { 
        View,
        Button,
        Text, 
        TextInput, 
        StyleSheet 
    } from 'react-native'

export default class ProductComponent extends Component {
    constructor (props){
        super(props);
        this.state = {
            product_name : "",
            type_type : "",
            prodError : "",
            prodTypeError : "",
            successMsg:"",
            success : false
        }
        this.ref = firestore().collection('products');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleProduct = (newText) => {
        this.setState ({product_name:newText})
    }
    handleType = (newText) => {
        this.setState ({product_type:newText})
    }
    handleSubmit = () => {
        if (!this.state.product_name || !this.state.product_type) {
            this.setState({
                prodError:"Product should not be empty!",
                prodTypeError: "Product type should not be empty!",
        })
        }else{
            this.setState({
                prodError:"",
                prodTypeError: "",
                successMsg:"Successfully Added!",
                success:true
             })
            this.ref.add({
                product_name : this.state.product_name,
                product_type : this.state.product_type
            }).then((data)=>{
                console.log(`Data added = ${data}`);
                this.setState({
                    product_name  :"",
                    product_type : ""
                });
                
            }).catch((error)=>{
                console.log(`error adding Firestore document = ${error}`);
                this.setState({
                    product_name  : '',
                    product_type : ''
                });
            });
        }
        
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.labelText}>Product Name</Text>
                {/* <Text style={{color:"red"}}>{this.state.prodError}</Text> */}
                <TextInput
                    inBl
                    style = { styles.inputText}
                    maxLength = {50}
                    placeholder = "e.g. Banana"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleProduct}  
                    underlineColorAndroid = { 'transparent'}
                />
                <Text style = {styles.labelText}>Product Type</Text>
                {/* <Text style={{color:"red"}}>{this.state.prodTypeError}</Text> */}
                <TextInput
                   style = { styles.inputText}
                   maxLength = {50}
                   placeholder = "e.g. Soft Drink ..."
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none" 
                   onChangeText = {this.handleType}
                />
                <Button style = {styles.submit}
                    title = "Add"
                    onPress = {this.handleSubmit}
                    
                />
                {/* <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.successMsg}>{this.state.successMsg}</Text>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        paddingTop: 23,
        alignSelf : 'stretch',
        marginLeft:10,
        marginRight:10
    },
    inputText : {
      marginTop:5,
      marginBottom:15,
      height: 40,
      borderColor: '#24a0ed',
      borderWidth: 1,
    },
    submit : {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      color:'darkslateblue'
    },
    labelText : {
        color : 'darkslateblue',
        fontSize:15,
    },
    successMsg : {
        color : 'green',
        alignContent:'center',
        alignItems:"center",
        fontSize:20
    }
})

