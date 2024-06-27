import { RootState } from "..";

export const selectorAuth = (state: RootState) => state.auth.data;
export const selectorAuthCommon = (state: RootState) => state.auth.commonData;