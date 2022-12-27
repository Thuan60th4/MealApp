import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, color,name }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
}

export default IconButton;
