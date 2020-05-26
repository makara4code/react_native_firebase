import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HeaderComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
        )
    }
}

HeaderComponent.defaultProps = {
    title : "Create Product"
}
const styles = StyleSheet.create({
    container : {
        height:60,
        padding:15,
        backgroundColor:'#24a0ed'
    },
    titleText : {
        color:'white',
        fontSize:23,
        textAlign:'center'
    }
})
