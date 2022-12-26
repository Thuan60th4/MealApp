import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <View style={styles.containItem} key={index}>
          <Text style={styles.Item}>{item}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  containItem: {
    backgroundColor: "#ccc",
    //borderradius thì phải có backGroundColor
    borderRadius: 8,
    marginBottom: 10,
  },
  Item: {
    padding: 10,
    textAlign: "center",
  },
});

export default List;
