import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import axios from 'axios';

import { couponScreenStyle } from '../styles/styles'; 


const CouponScreen = ({ navigation }) => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers")
            .then((response) => setProductData(response.data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const navigateToDetails = (id) => {
        navigation.navigate('CuponDetails', { productId: id })
    }

    const renderItem = ({ item }) => (

        <View>
            <TouchableOpacity 
            key={item.id} 
            style={couponScreenStyle.container}
            onPress={() => navigateToDetails(item.id)}>
            <Text>{item.name}</Text>
            <Image
            style={couponScreenStyle.image}
            source={{ uri: item.image_url }}
            />
            <TouchableOpacity 
            style={couponScreenStyle.ChooseButton} 
            onPress={() => navigateToDetails(item.id)}>
             <Text style={couponScreenStyle.buttonText}>Coupon 50</Text>
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={couponScreenStyle.screenStyle}>
            <FlatList
                data={productData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                />
        </View>
        
    );
}
export default CouponScreen;
