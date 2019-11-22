import React from "react";
import {
  Platform,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import logo from "../assets/logo.png";

export default function Login() {
  return (
    <KeyboardAvoidingView
      enable={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>SEU EMAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="asdf@asdf.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="ReactJS"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encontrar Spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
