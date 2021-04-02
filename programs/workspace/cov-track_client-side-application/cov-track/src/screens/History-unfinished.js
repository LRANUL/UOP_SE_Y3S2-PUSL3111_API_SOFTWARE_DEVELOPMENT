import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  SectionList,
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar,
  Card,
  Title,
  Paragraph,
  Badge,
  Avatar,
  //LeftContent,
  Button,
} from 'react-native-paper';
//import { Provider as StoreProvider } from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

function History(props) {
  const _goBack = () => console.log("Went back");
  const _handleSearch = () => console.log("Searching");
  const _handleMore = () => console.log("Shown more");

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={theme}>
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/4324939.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
        <Badge>Test</Badge>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </Card.Actions>
        </Card>
      </ImageBackground>
    </View>
    </PaperProvider>
    // </StoreProvider>
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
