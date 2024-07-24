import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

interface Group {
  name: string;
  memberCount: string;
  newPosts: number;
}

const Groups = () => {
  const [showAllYourGrps, setShowAllYourGrps] = useState(false);

  const yourGrps: Group[] = [
    { name: "Fun Ai Founders", memberCount: "3.1K", newPosts: 8 },
    { name: "Anime Club", memberCount: "7.1K", newPosts: 20 },
    { name: "World News", memberCount: "13.1K", newPosts: 35 },
    { name: "Tech Enthusiasts", memberCount: "9.5K", newPosts: 15 },
    { name: "Book Lovers", memberCount: "5.3K", newPosts: 10 },
  ];

  const moreGrps: Group[] = [
    { name: "Science Club", memberCount: "2.1K", newPosts: 5 },
    { name: "Music Lovers", memberCount: "6.2K", newPosts: 12 },
    { name: "Fitness Freaks", memberCount: "4.3K", newPosts: 9 },
    { name: "Photography", memberCount: "8.4K", newPosts: 20 },
  ];

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity style={styles.groupItem} onPress={() => console.log(item.name)}>
      <Text style={styles.groupName}>{item.name}</Text>
      <Text style={styles.groupInfo}>{`${item.memberCount} members · ${item.newPosts} new posts`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for groups"
        placeholderTextColor="#4A255D"
      />
      <FlatList
        data={yourGrps.slice(0, showAllYourGrps ? yourGrps.length : 3)}
        keyExtractor={(item) => item.name}
        renderItem={renderGroup}
        ListHeaderComponent={() => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Groups</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={() => setShowAllYourGrps(!showAllYourGrps)}>
            <Text style={styles.seeMore}>{showAllYourGrps ? "See less" : "See more"}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={moreGrps}
        keyExtractor={(item) => item.name}
        renderItem={renderGroup}
        ListHeaderComponent={() => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Discover More Groups</Text>
            <TouchableOpacity style={styles.groupItem} onPress={() => console.log("Create New Group")}>
              <Text style={styles.createGroupText}>+ Create New Group</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginBottom: 20,
    borderRadius: 5,
    color: "#4A255D",
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4A255D",
  },
  groupItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: 'center',
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  groupInfo: {
    fontSize: 14,
    color: "#666",
  },
  seeMore: {
    color: "#4A255D",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  createGroupText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#4A255D",
  },
});
