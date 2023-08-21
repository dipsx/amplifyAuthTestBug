import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";

Amplify.configure(awsConfig);
Amplify.Logger.LOG_LEVEL = "VERBOSE"


export default function App() {

  async function onSignInPressed() {
    console.log("onSignInPressed", new Date());

    await Auth.signIn("someLogin", "somePassword");

    console.log("onSignInPressed end", new Date());
  }

  return (
    <View style={styles.container}>

      <Button title="Sign In" onPress={() => onSignInPressed()} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
