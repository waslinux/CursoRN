import React from 'react'
import { Button, Alert, ToastAndroid, Platform, View} from 'react-native'

export default props => {
    const notificar = msg =>{
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }else {
            Alert.alert('Informção', msg)
        }
    }
    return(
        <View style={{flex:1, marginTop:250}}>
        <Button title='Plataforma?' 
            onPress={() => notificar('Parabéns!')}
        />
        </View>
    )
}