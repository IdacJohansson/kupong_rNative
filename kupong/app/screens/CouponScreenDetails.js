import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import axios from 'axios';

import { couponDetailsScreenStyle } from '../styles/styles'; 


const CouponScreenDetails = ({ route, navigation }) => {

  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  const API_URL = "https://api.punkapi.com/v2/beers"; 

  const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(productId);
      setProduct(data);
    };
    fetchData();
  }, [productId]);


  const renderItem = ({ item }) => (
    <View style={couponDetailsScreenStyle.bigContainer}>
        <View style={{ flex: 1 }}>
            <View style={couponDetailsScreenStyle.container}>
                <Text style={couponDetailsScreenStyle.textNameStyle}>{item.name}</Text>

            <Image
            style={couponDetailsScreenStyle.imageStyle}
            source={{ uri: item.image_url }}
            />

            <Text style={couponDetailsScreenStyle.textDescriptionStyle}>{item.description}</Text>
   
        </View>
            <TouchableOpacity style={couponDetailsScreenStyle.buttonChoose}>
                <Text style={couponDetailsScreenStyle.buttonText}>Choose</Text>
            </TouchableOpacity>
        </View>
    </View>
);

  return (
   
    <View style={couponDetailsScreenStyle.screenStyle}>
            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                />
    </View>
  );
}
export default CouponScreenDetails;