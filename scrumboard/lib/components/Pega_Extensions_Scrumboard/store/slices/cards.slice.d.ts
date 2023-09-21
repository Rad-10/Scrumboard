import ICard from "../../interfaces/ICard";
interface CardsSliceState {
    cards: ICard[];
    searchText: string;
}
export declare const cardsSlice: import("@reduxjs/toolkit").Slice<CardsSliceState, {
    setCards: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    setSearchText: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    addCard: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateOneCard: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    filterCards: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    clearFilters: (state: import("immer/dist/internal").WritableDraft<CardsSliceState>) => void;
}, "cards">;
export declare const setCards: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cards/setCards">, updateOneCard: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cards/updateOneCard">, filterCards: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cards/filterCards">, clearFilters: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cards/clearFilters">, addCard: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cards/addCard">, setSearchText: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cards/setSearchText">;
declare const _default: import("redux").Reducer<CardsSliceState, import("redux").AnyAction>;
export default _default;
