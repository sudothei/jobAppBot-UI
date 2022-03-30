import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";

export function DrawerContent({ navigation }: any) {
  return (
    <DrawerContentScrollView>
      <Drawer.Item
        icon="chart-areaspline"
        label="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Drawer.Item
        icon="file-multiple-outline"
        label="Total Applications"
        onPress={() => navigation.navigate("Total Applications")}
      />
      <Drawer.Item
        icon="cog-outline"
        label="Job Search Options"
        onPress={() => navigation.navigate("Job Search Options")}
      />
      <Drawer.Item
        icon="account-lock-outline"
        label="Site Credentials"
        onPress={() => navigation.navigate("Site Credentials")}
      />
      <Drawer.Item
        icon="credit-card-check-outline"
        label="Subscription"
        onPress={() => navigation.navigate("Subscription")}
      />
      <Drawer.Section />
      <Drawer.Item icon="logout" label="Log Out" onPress={() => {}} />
    </DrawerContentScrollView>
  );
}
