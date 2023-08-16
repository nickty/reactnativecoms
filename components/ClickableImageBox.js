import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

const ClickableImageBox = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View>
        <Image source={imageSource} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default ClickableImageBox;
