import React, {useState} from 'react';

import {Image, StyleSheet, View} from 'react-native';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';

function PageTwo() {
  const [showImage, setShowImage] = useState(true);

  const imageToggle = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <CustomText />
      </View>
      {showImage && (
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../assets/react.png')}
          />
        </View>
      )}
      <View style={styles.buttonBox}>
        <CustomButton type="TouchableOpacity" onPress={imageToggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 32
  },
  textBox: {
    padding: 16,
    flex: 2
  },
  imageBox: {
    padding: 16,
    flex: 2
  },
  buttonBox: {
    padding: 16,
    flex: 1
  },
});

export default PageTwo;
