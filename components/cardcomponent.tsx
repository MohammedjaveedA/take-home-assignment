import React from "react"; import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
interface Props{
    label:String,
    image:any,
    icon:keyof typeof FontAwesome.glyphMap;
}

const Card = ({ label, image,icon }:Props) => {
    return (
    <View style={styles.card}>
         <Image source={image} style={styles.image} />
          <View style={styles.textContainer}>
          <FontAwesome  name={icon} size={24} color="#6e6e6a" />
         <Text style={styles.name}>{label}</Text> 
           </View> 
         </View>
         );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "#333", borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, overflow: "hidden", width: 170, alignItems: "flex-start", },
    image: { 
    width: 180, 
    height: 150, 
    resizeMode: "cover",
    
 }, 
    textContainer: { 
    paddingVertical: 10,
    alignItems: "center",
    marginLeft:9,
    flexDirection:"row",
    gap:4,
    
}, 
    name: {
    fontSize: 12,
    fontWeight: "thin", 
    color: "#c4c4be",
    fontFamily:"CooperHewittMedium",
 }
});
   
export default Card;