import { FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FlashList} from "@shopify/flash-list"
import React, { useState } from 'react'


const ListAnimations = () => {
    const [data, setData] = useState(
        [
            {id:1,name:"lorem test"},
            {id:2,name:"lorem test"},
            {id:3,name:"lorem test"},
            {id:4,name:"lorem test"},
            {id:5,name:"lorem test"},
            {id:6,name:"lorem test"},
            {id:7,name:"lorem test"},
            {id:8,name:"lorem test"},
        ]
    )
    

    const handleDelete=(id:number)=>{
        LayoutAnimation.linear()
        // LayoutAnimation.spring()
        // LayoutAnimation.easeInEaseOut()
      setData(data.filter(it=>it.id!==id))
       }

  return (
    <View style={styles.container}>
        {/* <FlatList data={data} renderItem={({item})=>{
            return <TouchableOpacity style={styles.list}  key={item.id} onPress={()=>handleDelete(item.id)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        }}/> */}
        <FlashList

estimatedItemSize={200}

        data={data} renderItem={({item})=>{
            return <TouchableOpacity style={styles.list}  key={item.id} onPress={()=>handleDelete(item.id)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        }}
        />
    </View>
  )
}

export default ListAnimations

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
    },
    list:{
        padding:20,
        backgroundColor:"#f8dff8",
        width:200,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:5
    }
})