import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  SectionList
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function History(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/4324939.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <MaterialCommunityIconsIcon
            name="history"
            style={styles.sectionlst}
        >
        <SectionList
          sections={[
            {title: 'Title1', data: ['1', '2', '3']},
            {title: 'Title2', data: ['1', '2', '3', '4', '5', '6', '7']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        </MaterialCommunityIconsIcon>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  sectionlst: {
    width: 302,
    height: 148,
    backgroundColor: "rgba(74,144,226,0.9)",
    borderRadius: 17,
    marginTop: 87,
    alignSelf: "center"
  },
});

export default History;
