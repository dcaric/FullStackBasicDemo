import React from "react";
import { Button1 } from '../buttons/Button1';
import { Label1 } from '../labels/Label1';

export const ViewCounter = ({ counter, setCounter }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Button1 key={"button1"} setCounter={setCounter} counter={counter} />
            <Label1 key={"lable1"} counter={counter} />
        </div>
    );
};