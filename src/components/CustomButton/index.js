import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Text,
  View,
} from 'react-native';

export const TextBtn = function() {
  return <Text> Toggle Image </Text>;
};

function CustomButton({onPress, type}) {
  switch (type) {
    case 'TouchableHighlight':
      return (
        <TouchableHighlight onPress={onPress}>
          <TextBtn />
        </TouchableHighlight>
      );
    case 'TouchableNativeFeedback':
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View>
            <TextBtn />
          </View>
        </TouchableNativeFeedback>
      );
    case 'TouchableOpacity':
      return (
        <TouchableOpacity onPress={onPress}>
          <TextBtn />
        </TouchableOpacity>
      );
    case 'TouchableWithoutFeedback':
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <TextBtn />
        </TouchableWithoutFeedback>
      );
    default:
      <Button>
        <TextBtn />
      </Button>;
  }
}

export default CustomButton;
