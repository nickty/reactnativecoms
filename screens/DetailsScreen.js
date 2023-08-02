// DetailsScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';

const data = [
    {
        id: '1',
        title: 'Product 1',
        description: 'Description of Product 1',
        price: 10.99,
        image: 'https://example.com/product1.jpg',
    },
    {
        id: '2',
        title: 'Product 2',
        description: 'Description of Product 2',
        price: 19.99,
        image: 'https://example.com/product2.jpg',
    },
    {
        id: '3',
        title: 'Product 2',
        description: 'Description of Product 2',
        price: 19.99,
        image: 'https://example.com/product2.jpg',
    },
    {
        id: '4',
        title: 'Product 2',
        description: 'Description of Product 2',
        price: 19.99,
        image: 'https://example.com/product2.jpg',
    },
    // Add more products as needed
];

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default DetailsScreen;
