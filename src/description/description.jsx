import React from "react";
import { DescriptionButton } from "./styled";

function Description({text, onChowMore, isShowAllDescription}) {
    return (
        <>
            {text}
            <DescriptionButton onClick={onChowMore}>
        {isShowAllDescription ? "Cкрыть" : "Подробнее"}
      </DescriptionButton>
        </>
    );
}
export default Description;


