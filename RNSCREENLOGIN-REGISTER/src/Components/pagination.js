import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements';



class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxShowPage: 5
        }
    }

    showButton = () => {
        const { page, totalPage, goTo } = this.props
        const { maxShowPage } = this.state
        const rest = Math.floor(maxShowPage / 2)
        let buttons = []
        let start = (page - rest) < 1 ? 1 : (page + rest) > totalPage ? totalPage - maxShowPage + 1 : (page - rest)
        let end = (page + rest) >= totalPage ? totalPage : (page + rest) < maxShowPage ? maxShowPage : page + rest

        for (let i = start; i <= end; i++) {
            buttons.push(<View style={styles.button} key={i}>
                <Button
                    title={i.toString()}
                    disabled={page == i}
                    onPress={() => goTo(i)}
                />
            </View>)
        }
        return buttons
    }

    render() {
        const { page, totalPage, style, goTo } = this.props

        return (
            <View style={style} >
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Button
                            title="First"
                            disabled={page == 1}
                            onPress={() => goTo(1)}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Prev"
                            disabled={page == 1}
                            onPress={() => goTo(page - 1)}
                        />
                    </View>
                    {this.showButton()}
                    <View style={styles.button}>
                        <Button
                            title="Next"
                            disabled={page == totalPage}
                            onPress={() => goTo(page + 1)}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Last"
                            disabled={page == totalPage}
                            onPress={() => goTo(totalPage)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerButton: {
        // backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row"
    },
    button: {
        // backgroundColor: "grey",
        // width: 80,
        margin: 5
        // height: 50
    },
    active: {
        // backgroundColor: "darkgrey"
    }
})

export default Pagination;