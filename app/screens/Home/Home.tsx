import React from "react";
import { View, FlatList } from "react-native";
import { SearchBar } from "./SearchBar";
import { HorizontalFoodCard } from "../../components/HorizontalFoodCard";
import { MenuTypes } from "../../components/MenuTypes";
import { RecommendedSection } from "../../components/RecommendedSection";
import { PopularSection } from "../../components/PopularSection";
import { FoodCategory } from "../../components/FoodCategory";
import { DeliveryTo } from "../../components/DeliveryTo";
import { FilterModal } from "../../components/FilterModal";

import { styles } from "./styles";
import { dummyData } from "../../../constants";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenulist] = useState<any>([]);
  const [recommends, setRecommends] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, [selectedCategoryId, selectedMenuType]);

  const handleChangeCategory = (categoryId: number, menuTypeId: number) => {
    let selectedPopular = dummyData.menu.find(menu => menu.name === "Popular");
    let selectedRecommended = dummyData.menu.find(menu => menu.name === "Recommended");
    let selectedMenu = dummyData.menu.find(menu => menu.id === menuTypeId);
    setMenulist(selectedMenu?.list.filter(menu => menu.categories.includes(categoryId)));
    setRecommends(selectedRecommended?.list.filter(recommended => recommended.categories.includes(categoryId)));
    setPopular(selectedPopular?.list.filter(popular => popular.categories.includes(categoryId)));
  };

  return (
    <View style={styles.container}>
      {showFilterModal && (
          <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      <SearchBar showFilterModal={() => setShowFilterModal(true)} />

      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DeliveryTo />
            <FoodCategory
              selectedMenuType={selectedMenuType}
              handleChangeCategory={handleChangeCategory}
              setSelectedCategoryId={setSelectedCategoryId}
              selectedCategoryId={selectedCategoryId}
            />
            <RecommendedSection recommendedItems={recommends} />
            <PopularSection popularItems={popular} />
            <MenuTypes
              selectedMenuType={selectedMenuType}
              setSelectedMenuType={setSelectedMenuType}
              handleChangeCategory={handleChangeCategory}
            />
          </>
        }
        renderItem={({ item, index }) => <HorizontalFoodCard {...item} />}
      />
    </View>
  );
};
