import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Animated } from "react-native"
import { ListItem } from "react-native-elements"
import Swipeable from "react-native-gesture-handler/Swipeable"


class ListData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        }
    }

    renderLeftAction = (progress, dragX) => {
        console.log("render left action");
        const scale = dragX.interpolate({
            inputRange: [0, 300],
            outputRange: [0, 1]
        })
        return <View style={styles.action}>
            <Animated.Text style={[
                styles.actionText, {
                    transform: [{
                        translateX: scale
                    }]
                }]}
            >
                ini kiri
            </Animated.Text>
        </View>
    }

    renderItem = ({ item }) => {
        return <Swipeable
            renderLeftActions={this.renderLeftAction}
            onSwipeableLeftOpen={() => alert("left opened!!")}>
            <ListItem bottomDivider onPress={() => this.props.selectAlbum(item.id)}>
                <ListItem.Content>
                    <ListItem.Title>
                        {item.title}
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </Swipeable>
    }

    onRefresh = () => {
        console.log("refresh")
    }

    onEndReached = () => {
        console.log("onEndReached")
    }

    render() {
        return (
            <View style={this.props.style}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.items}
                    renderItem={this.renderItem}
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refresh}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    action: {
        backgroundColor: "red",
        justifyContent: "center",
        flex: 1
    },
    actionText: {
        // color: "blue",
        fontWeight: "bold",
        fontSize: 24,
        padding: 20
    },
    tempView: {
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderColor: "grey"
    }
})

export default ListData;