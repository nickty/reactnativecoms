// ProductList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
    {
        id: '1',
        title: 'Product 1',
        description: 'This is the description for Product 1.',
        price: 19.99,
    },
    {
        id: '2',
        title: 'Product 2',
        description: 'This is the description for Product 2.',
        price: 24.99,
    },
    // Add more products as needed
];

const ProductList = () => {
    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    );

    return (
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default ProductList;
