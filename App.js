/**
 * Sample React Native App 触摸事件
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AlertIOS

} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {

    // state
    constructor() {
        super();
        this.state = {
            text: '哈哈',
        };
    }

    renderPress(event) {

        this.setState({
            text: event,
        });
        // 获取DOM节点
        let text11 = this.refs.text12.text;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    ctiveOpacity={0.5}
                    onPress={() => this.renderPress('点击')}
                    onPressIn={() => this.renderPress('按下')}
                    onPressOut={() => this.renderPress('抬起')}
                    onLongPress={() => this.renderPress('长按')}>
                    <Text ref='text12'>{this.state.text}</Text>
                    <Text>{this.props.qqq}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// props
App.defaultProps = {
    qqq: '1231'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
