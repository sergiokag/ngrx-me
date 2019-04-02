export interface AppState {
  LikeList: ListItem[];
  HateList: ListItem[];
};

export interface ListItem {
  id: number,
  value: string
};