import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {handleException} from "./exception";
import explorer from "../../utils/explorer";
import {BlockClient} from "../../packages/core-sdk/clients/blockClient";
import {A_Block} from "../../packages/core-sdk/types";


export interface Block {
    information: A_Block,
    loading: boolean
}

const initialState: Block = {
    loading: false,
    information: {
        "txn-counter": 0,
        round: 0,
        transactions: [],
        timestamp: 0
    }
}

export const loadBlock = createAsyncThunk(
    'block/loadBlock',
    async (id: number, thunkAPI) => {
        const {dispatch} = thunkAPI;
        try {
            const blockClient = new BlockClient(explorer.network);
            dispatch(resetBlock());
            dispatch(setLoading(true));
            const blockInfo = await blockClient.get(id);
            dispatch(setLoading(false));
            return blockInfo;
        }
        catch (e: any) {
            dispatch(handleException(e));
            dispatch(setLoading(false));
        }
    }
);


export const blockSlice = createSlice({
    name: 'block',
    initialState,
    reducers: {
        resetBlock: state => initialState,
        setLoading: (state, action: PayloadAction<boolean> ) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadBlock.fulfilled, (state, action: PayloadAction<A_Block>) => {
            state.information = action.payload;
        });
    },
});

export const {resetBlock, setLoading} = blockSlice.actions
export default blockSlice.reducer