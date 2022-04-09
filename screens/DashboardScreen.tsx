import * as React from "react";
import { Appbar, DarkTheme, List, Title, Text, FAB } from "react-native-paper";
import { Dimensions, View, ScrollView, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

const TotalApplicationsChart = () => {
  return (
    <LineChart
      data={{
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            data: [
              Math.random() * 10 + 10,
              Math.random() * 10 + 20,
              Math.random() * 10 + 30,
              Math.random() * 10 + 40,
              Math.random() * 10 + 50,
              Math.random() * 10 + 60,
            ],
          },
        ],
      }}
      width={
        Dimensions.get("window").width < 800
          ? Dimensions.get("window").width - 32
          : 800 - 64
      }
      height={220}
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#4a148c",
        backgroundGradientTo: "#d81b60",
        backgroundGradientToOpacity: 0.5,
        backgroundGradientFromOpacity: 0.5,
        fillShadowGradientFrom: "#4a148c",
        fillShadowGradientTo: "#d81b60",
        fillShadowGradientOpacity: 1,
        propsForLabels: {
          fontFamily: "Roboto",
        },
        propsForBackgroundLines: {
          opacity: 0,
        },
        propsForDots: {
          opacity: 0,
        },
        decimalPlaces: 0,
        color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      }}
      bezier
      style={{
        borderRadius: 16,
        alignSelf: "center",
      }}
    />
  );
};

const SiteControl = ({ site }: any) => {
  return (
    <View
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    >
      <LinearGradient
        colors={["#d81b60", "#202020"]}
        //left, top
        start={[0.1, 0.5]}
        style={{ opacity: 0.95, borderRadius: 16 }}
      >
        <List.Item
          title={site.siteName}
          description={() => (
            <View>
              <Title>{site.totalApps.toPrecision(2)} Applications Total</Title>
              <Text>Applying to jobs...</Text>
            </View>
          )}
          right={(props: any) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ActivityIndicator
                animating={true}
                color={DarkTheme.colors.text}
                style={{ width: 40, height: 40 }}
              />
              <List.Icon {...props} icon="stop" />
            </View>
          )}
        />
      </LinearGradient>
    </View>
  );
};

export const DashboardScreen = ({ navigation }: any) => {
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
        <Appbar.Content title="Dashboard" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView
        style={{
          padding: 16,
          paddingBottom: 100,
        }}
      >
        <TotalApplicationsChart />
        <View
          style={{
            width: Dimensions.get("window").width < 800 ? "100%" : 800 - 64,
            alignSelf: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Title style={{ marginVertical: 16, fontSize: 40 }}>Total:</Title>
            <Title style={{ marginVertical: 16, fontSize: 40 }}>230</Title>
          </View>
          <View>
            {[
              { siteName: "Dice", totalApps: Math.random() * 100 },
              { siteName: "Monster", totalApps: Math.random() * 100 },
              { siteName: "Greenhouse", totalApps: Math.random() * 100 },
              { siteName: "StackOverflow", totalApps: Math.random() * 100 },
              { siteName: "Indeed", totalApps: Math.random() * 100 },
              { siteName: "LinkedIn", totalApps: Math.random() * 100 },
            ].map((site) => (
              <SiteControl site={site} />
            ))}
          </View>
        </View>
      </ScrollView>
      <FAB
        style={{
          position: "absolute",
          margin: 32,
          right: 0,
          bottom: 0,
        }}
        icon="play"
        label="start all"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};
