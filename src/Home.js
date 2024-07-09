import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { deviceHeight, deviceWidth } from "./Dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./Cards";

const Home = (props) => {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "New Delhi",
      image: require("../assets/Images/Image-02.jpg"),
    },
    {
      name: "New York",
      image: require("../assets/Images/Image-03.jpeg"),
    },
    {
      name: "London",
      image: require("../assets/Images/Image-04.jpg"),
    },
    {
      name: "San Francisco",
      image: require("../assets/Images/Image-05.jpg"),
    },
    {
      name: "New Jersey",
      image: require("../assets/Images/Image-06.jpg"),
    },
    {
      name: "Lucknow",
      image: require("../assets/Images/Image-07.jpg"),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require("../assets/Images/Image-01.jpg")}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceWidth - 30,
          }}
        >
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require("../assets/Images/image.jpeg")}
            style={{ height: 46, width: 46, borderRadius: 50 }}
          />
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: "white" }}>Weather App</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
            Search City Name
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 16,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                paddingHorizontal: 10,
                color: "white",
                fontSize: 20,
                paddingVertical: 10,
              }}
              placeholder="Search City"
              placeholderTextColor="white"
              value={city}
              onChangeText={(val) => setCity(val)}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Details", { name: city })
              }
            >
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My Locations
          </Text>

          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
