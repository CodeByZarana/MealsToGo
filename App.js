import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/index";

import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyA8fJggS3WYMb2R3akcM1gDqJT13YLg0gE",
  authDomain: "mealstogo-2c905.firebaseapp.com",
  projectId: "mealstogo-2c905",
  storageBucket: "mealstogo-2c905.appspot.com",
  messagingSenderId: "508669688953",
  appId: "1:508669688953:web:e426d63cd35b99c06068a8",
};

if (firebase.apps.length===0) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
