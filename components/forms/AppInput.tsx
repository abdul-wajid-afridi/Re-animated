import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {  forwardRef, memo } from "react";


type AppInputProps = HTMLInputElement

const AppInput = forwardRef<AppInputProps>((props, refVal) => {
  return <TextInput  {...props} />
});

export default memo(AppInput);

const styles = StyleSheet.create({})



