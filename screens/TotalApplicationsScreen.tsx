import * as React from "react";
import { Appbar, List } from "react-native-paper";
import { Dimensions, View, ScrollView } from "react-native";

export const TotalApplicationsScreen = ({ navigation }: any) => {
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
        <Appbar.Content title="Total Applications" />
      </Appbar.Header>
      <ScrollView style={{ padding: 16 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
          <List.Item
            title="Software Engineer - Dell"
            description="Aug 8, 2022"
            left={(props: any) => (
              <List.Icon {...props} icon="file-document-outline" />
            )}
          />
        ))}
      </ScrollView>
    </View>
  );
};
