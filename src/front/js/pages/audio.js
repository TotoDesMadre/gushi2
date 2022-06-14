import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Audio = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="Pronounciation">
      {store.audioLink.audio && (
        <audio controls>
          <source src={store.audioLink.audio} type="audio/ogg" />
        </audio>
      )}
    </div>
  );
};
