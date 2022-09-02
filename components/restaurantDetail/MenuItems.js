import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://www.simplyrecipes.com/thmb/o21f7yISawuyh4zKJ8IiErwue28=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg"
    },
    {
        title: "Chitaquiles",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://www.thespruceeats.com/thmb/lFrWbdXFUgCJXBuYtPR4pGs0SuU=/1000x1000/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg"
    },
     {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg"
    },
    {
        title: "Chitaquiles",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://www.thespruceeats.com/thmb/lFrWbdXFUgCJXBuYtPR4pGs0SuU=/1000x1000/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg"
    },
     {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg"
    },
    {
        title: "Chitaquiles",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://www.thespruceeats.com/thmb/lFrWbdXFUgCJXBuYtPR4pGs0SuU=/1000x1000/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg"
    },
     {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg"
    },
    {
        title: "Chitaquiles",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: 
            "https://www.thespruceeats.com/thmb/lFrWbdXFUgCJXBuYtPR4pGs0SuU=/1000x1000/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg"
    },
]

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle : {
        fontSize: 19,
        fontWeight: '600',
    }
})

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
          foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                </View>
                <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
            </View>
            ))
        }
    </ScrollView>
  )
}

const FoodInfo = (props) => (
    <View style={{ width: 180, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{uri : props.food.image}}  style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)