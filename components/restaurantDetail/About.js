import { View, Text, Image } from 'react-native'
import React from 'react'

const image = "https://www.traveldine.com/wp-content/uploads/2021/09/northern-Thai-food-hot-shutter-stock.jpg"

const title = "Farm House Kitchen Thai Cuisine"
const description = "Thai . Comfort Food . $$ . 💳 . 4 ⭐ (2913+)"

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image}} style={{ width: "100%", height: 150 }} />
)

const RestaurantTitle = (props) => (
    <Text style={{ 
        fontSize: 25,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.title}
    </Text>
)


const RestaurantDescription = (props) => (   
    <Text style={{
        marginTop: 10, 
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 14,
    }}>
        {props.description}
    </Text>
)