import React, { Component } from "react";
import {View, Text, ImageBackground, StyleSheet} from "react-native";

import commonStyles from "../commonStyles";
import todayImage from "../../assets/imgs/today.jpg";

import moment from "moment";
import "moment/locale/pt-br";

export default class TaskList extends Component{
    render(){
        const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
        return(
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Tarefa 1</Text>
                    <Text>Tarefa 2</Text>
                    <Text>Tarefa 3</Text>
                    <Text>Tarefa 4</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    }, 
    titleBar: {
        flex: 1,
        justifyContent: "flex-end",
    }, 
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20, 
        marginBottom: 10, 
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20, 
        marginBottom: 30
    }
})

//Em flex, poderia colocar FlexGrow, que significa a mesma coisa 
