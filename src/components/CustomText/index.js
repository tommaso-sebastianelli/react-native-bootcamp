import React, { Fragment } from 'react'

import {
    StyleSheet,
    Text
} from 'react-native';

function CustomText() {

    return (
        <Fragment>
            <Text style={styles.titleText}>
                Lorem Ipsum
            </Text>
            <Text style={styles.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    bodyText: {
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CustomText
