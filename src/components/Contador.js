import React, {Component} from 'react';
import {View, Text, TouchableHighLight,AppRegistry } from 'react-native';


export default class Contador extends Component{

    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero +1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>{this.props.numero}</Text>
                <TouchableHighLight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighLight>
            </View>
        )
    }
}

