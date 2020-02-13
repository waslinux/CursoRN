import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{
    state = {
        texto: ''
    }
    alterarTexto = texto =>{
        this.setState({texto})
    }
    render (){
        return(
            <View style={Padrao.view}>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                        style={Padrao.inputt}
                        onChangeText={this.alterarTexto}
                />
            </View>
        )
    }
}
