import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thain Cuisine',
    image: 'https://www.simplyrecipes.com/thmb/o21f7yISawuyh4zKJ8IiErwue28=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg',
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [{title: "Thai"}, {title: "Comfort Food"}]
}

export default function About(props) {
    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((data) => data.title).join(" . ");
    const description = `${formattedCategories} ${price ? " . " + price : ""} .  💳 . ${rating} ⭐ (${reviews}+)`

    return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image}} style={{ width: "100%", height: 120 }} />
)

const RestaurantName = (props) => (
    <Text style={{ 
        fontSize: 25,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.name}
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