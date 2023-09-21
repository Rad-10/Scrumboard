import IColumn from "../../interfaces/IColumn";
interface ColumnsSliceState {
    columns: IColumn[];
    updatedColumns: IColumn[] | undefined;
}
export declare const columnsSlice: import("@reduxjs/toolkit").Slice<ColumnsSliceState, {
    setColumns: (state: import("immer/dist/internal").WritableDraft<ColumnsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateColumns: (state: import("immer/dist/internal").WritableDraft<ColumnsSliceState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "columns">;
export declare const setColumns: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "columns/setColumns">, updateColumns: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "columns/updateColumns">;
declare const _default: import("redux").Reducer<ColumnsSliceState, import("redux").AnyAction>;
export default _default;
