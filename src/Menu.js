import React from 'react'
import {createDrawerNavigator} from 'react-navigation';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Platformas from './components/Plataformas'
//import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import  Avo  from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'


export default createDrawerNavigator({ 
    TextoSincronizado:{
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado'}
    },
    Avo:{
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento:{
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Platformas:{
        screen: Platformas
    },
    contador: {
        screen: ()=> <Contador />
    },
    MegaSena:{
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar:{
        screen: () => <ParImpar numeros={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!'/>
    }
}, {drawerWidth: 300})