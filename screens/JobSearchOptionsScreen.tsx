import * as React from "react";
import { useState } from "react";
import { Appbar, DarkTheme, List, Checkbox } from "react-native-paper";
import { Dimensions, View, ScrollView } from "react-native";

export const JobSearchOptionsScreen = ({ navigation }: any) => {
  const [remoteChecked, setRemoteChecked] = useState(false);
  const [remoteOnlyChecked, setRemoteOnlyChecked] = useState(false);
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
        <Appbar.Content title="Job Search Options" />
      </Appbar.Header>
      <ScrollView style={{ padding: 16 }}>
        <List.Accordion
          title="Remote Options"
          left={(props) => <List.Icon {...props} icon="web" />}
          expanded={true}
          right={() => <View></View>}
        >
          <Checkbox.Item
            label={"Include remote jobs"}
            status={remoteChecked ? "checked" : "unchecked"}
            disabled={remoteOnlyChecked}
            onPress={() => {
              setRemoteChecked(!remoteChecked);
            }}
          />
          <Checkbox.Item
            label={"Remote jobs only"}
            status={remoteOnlyChecked ? "checked" : "unchecked"}
            onPress={() => {
              setRemoteOnlyChecked(!remoteOnlyChecked);
            }}
          />
        </List.Accordion>
        <List.Accordion
          title="Locations"
          left={(props) => <List.Icon {...props} icon="map-marker" />}
          expanded={true}
          right={() => (
            <List.Icon icon="pencil" color={DarkTheme.colors.placeholder} />
          )}
        >
          {["Charlotte", "Atlanta", "Los Angeles"].map(
            (locationName: string) => (
              <List.Item title={locationName} />
            )
          )}
        </List.Accordion>
        <List.Accordion
          title="Job Title Keywords"
          left={(props) => <List.Icon {...props} icon="briefcase" />}
          expanded={true}
          right={() => (
            <List.Icon icon="pencil" color={DarkTheme.colors.placeholder} />
          )}
        >
          {["Software Engineer", "Developer", "Python"].map(
            (locationName: string) => (
              <List.Item title={locationName} />
            )
          )}
        </List.Accordion>
        <List.Accordion
          title="Avoid Keywords"
          left={(props) => <List.Icon {...props} icon="cancel" />}
          expanded={true}
          right={() => (
            <List.Icon icon="pencil" color={DarkTheme.colors.placeholder} />
          )}
        >
          {["Senior", "III", "Architect"].map((locationName: string) => (
            <List.Item title={locationName} />
          ))}
        </List.Accordion>
      </ScrollView>
    </View>
  );
};
