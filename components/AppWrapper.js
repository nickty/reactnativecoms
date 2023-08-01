import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';

const AppWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    // Function to set loading state (true or false) in the wrapper
    const setLoading = (loading) => {
        setIsLoading(loading);
    };

    return (
        <View style={styles.container}>
            {/* Optional: Customize status bar */}
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

            {/* Your app content goes here */}
            {children}

            {/* Show loading indicator if isLoading is true */}
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Set a default background color
        // Add any other global styles you want for the wrapper component
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
});

export default AppWrapper;
