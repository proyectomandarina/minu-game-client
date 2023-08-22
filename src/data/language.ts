import { useContext } from "react";
import { GameContext } from "../context";

const { ctx, setCtx } = useContext(GameContext);

const language = {
    es: {
        homeAlert: "¡CUANDO MANEJAMOS TODA NUESTRA ATENCION DEBE ESTAR EN LA CALLE!"
    },
    por: {
        homeAlert: "¡QUANDO DIRIGIMOS, TODA NOSSA ATENÇÃO DEVE SER NA RUA!"
    }
}

export default language