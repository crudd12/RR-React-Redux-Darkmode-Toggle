import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
// import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
    // middleware: [logger]
})