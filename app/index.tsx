import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoarding from "./onboarding";
import Login from "./login";
import Main from "./(protected)/main";

const Root = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [hasOnboarded, setHasOnboarded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch token
      const token = await AsyncStorage.getItem("tokenTukangKu");
      setHasToken(token !== null);

      // Fetch onboarding status
      const onboarded = await AsyncStorage.getItem("onboarded");
      setHasOnboarded(onboarded !== null);

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  if (!loading && !hasOnboarded) {
    return <OnBoarding />;
  }

  if (!loading && hasOnboarded && !hasToken) {
    return <Login />;
  }

  if (!loading && hasOnboarded && hasToken) {
    return <Main />;
  }
};

export default Root;
