import React from "react";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./store/store";
import {Provider} from "react-redux";
import Root from "./screens/Root";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Root />
            </PersistGate>
        </Provider>
    );
}

