import { configureStore } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import reducers from './store/reducers/index';
import { removeAuthToken } from '@/utils/localstorage.helper';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import { retentionUser } from './services/retention-user';


export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        // if (isRejectedWithValue(action) && action.payload?.data?.error?.message === 'Invalid auth token') {
        //     removeAuthToken();
        //     window.location.href = '/login';
        // }
        return next(action);
    }

const store = () => configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(retentionUser.middleware)
            .concat(rtkQueryErrorLogger)
});


export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(store);
