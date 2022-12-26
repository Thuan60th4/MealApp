import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <Ionicons name="heart" color="white" size={24} />
    </Pressable>
  );
}

export default IconButton;
