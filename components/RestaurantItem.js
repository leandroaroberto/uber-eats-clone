import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage/>
      <RestaurantInfo/>
    </View>
  )
}

const RestaurantImage = () => (
    <>
        <Image  
            source={{uri: "https://cdn.sortiraparis.com/images/80/83517/438334-visuel-paris-tour-eiffel.jpg"}} 
            style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{ position: 'absolute', right:20, top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 10 }}
    >
        <View>
            <Text style={{fontSize : 15, fontWeight: "bold"}}>Farmhouse Kitchen Thai Cuisine</Text>
            <Text style={{fontSize : 13, color: "gray"}}>30-45 - min</Text>
        </View>
        <View style={{
            backgroundColor: 'white',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15
        }}>
            <Text>3.5</Text>
        </View>
    </View>
)