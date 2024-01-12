import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isRightSidebarVisible: boolean;
    threadId: string;
};

type InitialState = {
    value: AuthState;
};

const initialState: InitialState = {
    value: {
        isRightSidebarVisible: true,
        threadId: "",
    },
};

export const share = createSlice({
    name: "share",
    initialState,
    reducers: {
        shareThread: (state, action: PayloadAction<{ threadId: string }>) => {
            state.value.isRightSidebarVisible = false;
            state.value.threadId = action.payload.threadId;

        },
    },
});

// Action creators
export const { shareThread } = share.actions;

// Reducer
export default share.reducer;


// right side bar normal rese : isRightSidebarVisible = true; // done
// user click on share button :isRightSidebarVisible=false; // done
// false thse to tya btavano new component : username search bar with send
// send thy ne done button click krta : isRightSidebarVisible = true,
// and jene moklyu hoy ena ma notification moklvanu