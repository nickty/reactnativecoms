// TextSlider.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
    { id: '1', text1: 'Slide 1 - Column 1', text2: 'Slide 1 - Column 2' },
    { id: '2', text1: 'Slide 2 - Column 1', text2: 'Slide 2 - Column 2' },
    { id: '3', text1: 'Slide 3 - Column 1', text2: 'Slide 3 - Column 2' },
    // Add more slides as needed
];

const TextSlider = () => {
    return (
        <FlatList
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.slide}>
                    <View style={styles.column}>
                        <Text style={styles.text}>{item.text1}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.text}>{item.text2}</Text>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    column: {
        flex: 0.5, // To show two columns equally in the center
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'red',
        // paddingHorizontal: 15
        padding: 20,
        borderRadius: 10,
        width: 180
    },
});

export default TextSlider;
