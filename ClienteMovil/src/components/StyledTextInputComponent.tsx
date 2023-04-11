import { StyleSheet, TextInput } from "react-native";

const StyledTextInputComponent = ({ style = {}, ...props }) => {
  const inputStyle = [styles.textInput, style];
  return <TextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 1,
  },
});

export default StyledTextInputComponent;
