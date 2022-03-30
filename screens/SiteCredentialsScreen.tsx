import * as React from "react";
import { Appbar, TextInput, List, DarkTheme } from "react-native-paper";
import { Dimensions, View, ScrollView } from "react-native";
import { useForm } from "react-hook-form";

export const SiteCredentialsScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
      }}
    >
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Site Credentials" />
      </Appbar.Header>
      <ScrollView style={{ padding: 16 }}>
        {["Dice", "Monster", "StackOverflow", "Greenhouse"].map((name) => (
          <List.Section style={{ paddingBottom: 10 }}>
            <List.Subheader>{name}</List.Subheader>
            <TextInput
              mode="outlined"
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
              style={{ marginBottom: 10 }}
            />
            <TextInput
              mode="outlined"
              label="Password"
              value={text}
              secureTextEntry
              right={
                <TextInput.Icon
                  name="eye-off"
                  color={DarkTheme.colors.placeholder}
                />
              }
              onChangeText={(text) => setText(text)}
            />
          </List.Section>
        ))}
      </ScrollView>
    </View>
  );
};
