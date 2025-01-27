/* eslint-disable prettier/prettier */
import React, { useContext,  useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword); //the local searchKeyword is set whenever the keyword changes in the location context
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar placeholder="Search for a location" value={searchKeyword}
      icon ={isFavouritesToggled ? "heart" : "heart-outline"}
      onIconPress = {onFavouritesToggle}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
