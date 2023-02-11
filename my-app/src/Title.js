import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        WELCOME: "Benvenuto!"
    },
    eng: {
        WELCOME: "Welcome!"
    }
}

export default class Title extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {((language) => {
                    return (
                        <h1>{strings[language].WELCOME}</h1>
                    )
                })}
            </LanguageContext.Consumer>
        )
    }
}