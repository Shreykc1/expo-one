import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const PlaceholderImage = require('@/assets/images/background-image.png')
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          quality: 1,
        });

        if (!result.canceled) {
          console.log(result);
        } else {
          alert('You did not select any image.');
        }
      };




  return (
    <View
      style={styles.container}
    >
     <View>
        <ImageViewer imgSource={PlaceholderImage} />
     </View>
     <View style={styles.footerContainer}>
     <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fdfdfd'
    },
    button: {
        backgroundColor: '#fff',
        color: '#000000',
        paddingHorizontal: 40,
        paddingVertical:12,
        borderRadius: 5,
        fontWeight: 'light',
        marginTop: 20,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginTop: 30
  },
})
