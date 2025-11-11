import { Text } from "react-native";
const AppHeader = ({ title }: { title: string }) => {
  return (
    <Text
      className="text-4xl font-bold px-8"
      style={{ fontFamily: "TTFirs-Neue-Bold" }}
    >
      {title}
    </Text>
  );
};

export default AppHeader;
