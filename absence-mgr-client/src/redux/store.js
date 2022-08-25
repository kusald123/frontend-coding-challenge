import { configureStore } from "@reduxjs/toolkit";
import absences from "./absences"; 

export default configureStore({
    reducer: {
        absences: absences
    }
})