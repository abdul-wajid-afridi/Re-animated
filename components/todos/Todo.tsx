

import React, { useState, useCallback, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TodoApp = () => {
  const [data, setData] = useState<{id:number,name:string}[]>([]);
  const inputValue = useRef('');

  const handleData = useCallback(() => {
    if (!inputValue.current) return;

    const newName = inputValue.current;
    const newId = Date.now();

    setData((prevData:any) => [...prevData, { name: newName, id: newId }]);
    inputValue.current = ''; // Clear the ref value
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Enter a name"
        onChangeText={(text) => (inputValue.current = text)}
        value={inputValue.current}
      />
      <Button title="Add" onPress={handleData} />
      {data.map((item:any) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default TodoApp;
