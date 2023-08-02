// DetailsScreen.js
import React from 'react';
import { View, Text, Button, FlatList, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import ProductCard2 from '../components/ProductCard2';
import ProductCard3 from '../components/ProductCard3';

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
    const products = [
        {
            id: '1',
            title: 'Product 1',
            description: 'This is the description for Product 1.',
            price: 19.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: '2',
            title: 'Product 2',
            description: 'This is the description for Product 2.',
            price: 24.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: '3',
            title: 'Product 2',
            description: 'This is the description for Product 2.',
            price: 24.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: '4',
            title: 'Product 2',
            description: 'This is the description for Product 2.',
            price: 24.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        // Add more products as needed
    ];
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            {/* <FlatList
                data={data}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
            /> */}
            {/* <ScrollView>
                {products.map((product) => (
                    <ProductCard2
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </ScrollView> */}
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard3
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                )}
            />
        </View>
    );
};

export default DetailsScreen;
