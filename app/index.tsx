import { useEffect, useState } from "react";
import { 
  View, Text, Image, ScrollView, Pressable, StyleSheet, TouchableOpacity, 
  Animated
} from "react-native";
import { Settings, Share2, Grid2x2 as Grid, Bookmark, Heart, Flag } from "lucide-react-native";
import Card from "@/components/cardcomponent";

const PROFILE_IMAGE = require("../assets/images/profile.png");
const tick=require("../assets/images/tick.png");
const liked=require("../assets/images/liked.png");
const saved= require("../assets/images/saved.png");
const files= require("../assets/images/files.png");
const BACKGROUND_IMAGE = require("../assets/images/background.jpg");

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("collections");
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, { toValue: 1, duration: 2000, useNativeDriver: false }),
        Animated.timing(animatedValue, { toValue: 0, duration: 2000, useNativeDriver: false })
      ])
    ).start();
  }, []);



  const imageOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1] 
  });
  
  const imageScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.05] 
  });

   

  return (
    <ScrollView style={styles.container}>
    
      <Animated.View  style={styles.profileSection} >
      <Animated.Image 
        source={BACKGROUND_IMAGE} 
        style={[styles.backgroundImage, { opacity: imageOpacity, transform: [{ scale: imageScale }] }]} 
      />  
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <Share2 color="#fff" size={24} />
          <Settings color="#fff" size={24} style={styles.settingsIcon} />
        </View>
      </View>

      {/* PROFILE SECTION */}
        <Image source={PROFILE_IMAGE} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <View style={styles.profile}>
          <Text style={styles.username}>@theo_from_hsr
             </Text>
             <Image source={tick} style={styles.profiletick}/>
           
              <TouchableOpacity style={styles.profileedit}>
                <Text style={styles.bio}>EDIT PROFILE 🖋️</Text>
              </TouchableOpacity>
             
             </View>
        
          <Text style={styles.location}>🇮🇳 INDIA</Text>
          <Text style={styles.bio}>18 y/o with high ambitions, want to build cool stuff!</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>👤2</Text>
            <Text style={styles.statLabel}>FOLLOWING</Text>
          </View>
        </View>
      </Animated.View>

      {/* TABS */}
      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem}>
          <Grid color={activeTab === "collections" ? "#00ff9d" : "#666"} size={24} />
          <TouchableOpacity onPress={() => setActiveTab("collections")}>
            <Text style={activeTab === "collections" ? styles.tabTextActive : styles.tabTextInactive}>
              COLLECTIONS
            </Text>
          </TouchableOpacity>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <Flag color={activeTab === "tags" ? "#00ff9d" : "#666"} size={24} />
          <TouchableOpacity onPress={() => setActiveTab("tags")}>
            <Text style={activeTab === "tags" ? styles.tabTextActive : styles.tabTextInactive}>
              MANAGE TAGS
            </Text>
          </TouchableOpacity>
        </Pressable>
      </View>

      {/* CONDITIONAL RENDERING */}
      {activeTab === "collections" ? (
        <View style={styles.content}>
        <View style={styles.contentSection}>
          <Card icon="heart" label="LIKED" image={liked} count="(32)"/>
          <Card icon="bookmark" label="SAVED" image={saved} count="(23)"/>
        </View>
        <Card icon="file" label="FILES" image={files} count="(3)"/>
        </View>
       
        
  
      ) : (
        <View style={styles.manageSection}>
          <Text style={styles.manageTagsText}>Our recommendations work best when you let us know these things:</Text>
          <View style={styles.tagOption}>
            <Text style={styles.tagTitle}>YOUR DIFFICULTY ✨</Text>
            <Text style={styles.tagDescription}>You decide the level of challenge you want!</Text>
          </View>
          <View style={styles.tagOption}>
            <Text style={styles.tagTitle}>INTERESTS YOU LIKE ✨</Text>
            <Text style={styles.tagDescription}>We’ll use these to show you cool builds</Text>
          </View>
          <View style={styles.tagOption}>
            <Text style={styles.tagTitle}>TOOLS USED 🛠</Text>
            <Text style={styles.tagDescription}>We’ll suggest better using these picks.</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a1a" },
  header: { paddingHorizontal: 20, paddingTop: 60 },
  headerActions: { flexDirection: "row", justifyContent: "flex-end", gap: 20 },
  settingsIcon: { marginLeft: 5 },
  profileSection: { padding: 20, marginLeft:6 },
  profileImage: { width: 80, height: 80, borderRadius: 0, marginBottom: 16 },
  profiletick:{ width: 25, height: 22,marginTop:2 }, 
  profileInfo: { gap: 4},
  profile:{flexDirection:"row",gap:3},
  profileedit:{marginLeft:72},
  username: { color: "#fff", fontSize: 18, fontFamily: "CircularStd-Book"  },
  location: { color: "#fff", fontFamily: "CircularStd-Book" },
  bio: { color: "#cccaca", marginTop: 4, fontFamily: "CircularStd-Book" },
  statsContainer: { marginTop: 20 },
  statItem: { alignItems: "flex-start" },
  statNumber: { color: "#fff", fontSize: 18, fontWeight: "bold", fontFamily: "CircularStd-Book" },
  statLabel: { color: "#cccaca", fontSize: 12, marginTop: 4, fontFamily: "CircularStd-Book" },
  tabBar: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#333", paddingHorizontal: 20 },
  tabItem: { flexDirection: "row", alignItems: "center", paddingVertical: 16, marginRight: 32 },
  tabTextActive: { color: "#00ff9d", fontSize: 14, fontWeight: "600", marginLeft: 8, fontFamily: "CircularStd-Book" },
  tabTextInactive: { color: "#666", fontSize: 14, fontWeight: "600", marginLeft: 8, fontFamily: "CircularStd-Book" },
  content:{padding: 15, gap: 15},
  contentSection: { gap: 15, flex:1,flexDirection:"row" },
  manageSection: { padding: 20, gap: 15, },
  contentBlock: { gap: 16 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  sectionTitle: { color: "#fff", fontSize: 14, fontWeight: "600", fontFamily: "CircularStd-Book" },
  gridContainer: { flexDirection: "row", gap: 8 },
  gridItem: { flex: 1, aspectRatio: 1, borderRadius: 12 },
  gridItemDark: { backgroundColor: "#333" },
  gridItemLight: { backgroundColor: "#444" },
  manageTagsText: { color: "#fff", fontSize: 14, fontFamily: "CircularStd-Book", marginBottom: 16 },
  tagOption: { backgroundColor: "#222", padding: 12, borderRadius: 10, marginBottom: 10 },
  tagTitle: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  tagDescription: { color: "#aaa", fontSize: 12, marginTop: 4 },
  backgroundImage: { 
    position: "absolute",
    width: "200%",
    height: "110%", 
    resizeMode: "cover",
  },
});
