import React from "react";

export const TextFieldWrapper = ({children}) => (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: 4,
        alignSelf: "stretch",
        height: 42,
        flexShrink: 0
    }}>{children}</div>
);