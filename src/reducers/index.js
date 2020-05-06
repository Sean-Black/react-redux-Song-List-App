import { selectSong } from "../actions";

const songsReducer = () => {
  return [
    { title: "Toosie Slide", duration: "4:07" },
    { title: "Intentions", duration: "3:59" },
    { title: "Don't start now", duration: "4:07" },
    { title: "The Scotts", duration: "3:07" },
  ];
};

const SelectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};
