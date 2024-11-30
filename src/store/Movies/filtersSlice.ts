import { createSlice } from '@reduxjs/toolkit';
import {
  CATEGORIES,
  FiltersState,
  GetCategoriesKeys,
  GetLanguageKeys,
  GetRulesKeys,
  LANGUAGES,
  RULES,
} from '../../constants';

const initialState: FiltersState = {
  rule: {
    label: GetRulesKeys(RULES.None),
    value: RULES.None,
  },
  language: {
    label: GetLanguageKeys(LANGUAGES.English),
    value: LANGUAGES.English,
  },
  category: {
    label: GetCategoriesKeys(CATEGORIES.Popular),
    value: CATEGORIES.Popular,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setRule: (state, { payload }) => {
      state.rule = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setFilters: (state, { payload }) => {
      state.category = payload.category;
      state.rule = payload.rule;
      state.language = payload.language;
    },
  },
});

export const { setCategory, setLanguage, setRule, setFilters } =
  filtersSlice.actions;
