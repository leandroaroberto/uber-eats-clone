import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import { SaferAreaView } from '../components/home/SaferAreaView'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import {YELP_API_KEY} from '../config';
import { Divider } from '@rneui/themed';
import BottomTabs from '../components/home/BottomTabs'


export default function Home() {

  const [activeTab,setActiveTab] = useState('Delivery')
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState('Chicago')

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;    

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        const businessResult = json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase())
            );
        setRestaurantData(businessResult.length ? businessResult : json.businesses)
      }
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SaferAreaView>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showVerticalScrowIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SaferAreaView>
  )
}