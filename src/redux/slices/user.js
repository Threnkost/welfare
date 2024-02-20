import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            email: '',
            name: '',
            username: '',
            surname: '',
            phoneNumber: '',
            city: '',
            location: '',
            points: 0,
        },
        reducers: {
            init: (state, action) => {
                const payload = action.payload;
                
                state.email       = payload.email;
                state.name        = payload.name;
                state.username    = payload.username;
                state.surname     = payload.surname;
                state.phoneNumber = payload.phoneNumber;
                state.city        = payload.city;
                state.location    = payload.location;
                state.points      = payload.points;
            }
        }
    }
);

export const { init } = userSlice.actions;
export default userSlice.reducer;