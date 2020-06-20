import artistServer from './artistserver';
import titleServer from './titlesserver';
import genreServer from './genreserver';
import albumServer from './albumserver';
import musicalbumServer from './musicalbumserver';
export function addArtistInfo() {
  const artist_id: any = document.getElementById('artist_id');
  const artist_name: any = document.getElementById('artist_name');
  const profession: any = document.getElementById('profession');
  console.log(artist_id + " " + artist_name + profession);
  artistServer.createArtistObj(Number(artist_id.value), artist_name.value, profession.value)
    .then((response: any) => {
      document.getElementById('mydata').innerHTML = response;
    });
}
export function getArtists() {
  let jsonObject = '';
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log(response);
      const myObj = JSON.parse(response);
      for (const i of myObj) {
        jsonObject += i.artist_id + " " + i.artist_name + " " + i.profession + '<br>';
        console.log(i.artist_id);
      }
      document.getElementById('result').innerHTML = jsonObject;
    });

}

export function addTitleInfo() {
  console.log('title');
  const title_id: any = document.getElementById('title_id');
  const title_name: any = document.getElementById('title_name');
  const lyrisist: any = document.getElementById('lyrisist');
  const singer: any = document.getElementById('singer');
  const director: any = document.getElementById('director');
  titleServer.createTitleObj(Number(title_id.value),
    title_name.value, lyrisist.value, singer.value, director.value)
    .then((response: any) => {
      console.log(response);
      document.getElementById('mydata').innerHTML = response;

    });
}
export function getMyTitles(): void {
  let jsonObject = '';
  titleServer.getTitlesData()
    .then((response: any) => {
      console.log(response);
      const myObj = response;
      for (const i of myObj) {
        jsonObject += i.title_id + " " + i.title_name + " " + i.singer + +' ' + i.lyrisist + '' + i.director + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });
  console.log('my titles');

}
export function getArtistsInfoForTitles() {
  console.log('my fun');
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log('hello' + response);
      let myObj = JSON.parse(response);
      for (const i of myObj) {
        const singer = document.getElementById('singer');
        console.log(i.artist_id);
        singer.innerHTML = singer.innerHTML + '<option value="' + i.artist_name + '">' + i.artist_name + '</option>';
        const director = document.getElementById('director');
        director.innerHTML = director.innerHTML + '<option value="' + i.artist_name + '">' + i.artist_name + '</option>';
        const lyrisist = document.getElementById('lyrisist');
        lyrisist.innerHTML = lyrisist.innerHTML + '<option value="' + i.artist_name + '">' + i.artist_name + '</option>';
      }
    });

};
//Add Genre Infomation
export function addGenreInfo() {
  console.log('genre');
  const genre_id: any = document.getElementById('genre_id');
  const genre_name: any = document.getElementById('genre_name');
  console.log(genre_id.value + ' ' + genre_name.value);
  genreServer.createGenreObj(Number(genre_id.value), genre_name.value)
    .then((response: any) => {
      console.log(response);
      document.getElementById('mydata').innerHTML = response;
    });
}
export function getMyGenre(): void {
  let jsonObject = '';
  genreServer.getGenreData()
    .then((response: any) => {
      console.log(response);
      const myObj = response;
      for (const i of myObj) {
        jsonObject += i.genre_id + " " + i.genre_name + " " + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });
}

export function addAlbumInfo() {
  const album_id: any = document.getElementById('album_id');
  const album_name: any = document.getElementById('album_name');
  const year: any = document.getElementById('year');
  albumServer.createAlbumObj(Number(album_id.value), album_name.value, Number(year.value))
    .then((response: any) => {
      console.log(response);
      document.getElementById('mydata').innerHTML = response;
    });
}
export function getMyAlbum(): void {
  let jsonObject = '';
  albumServer.getALbumData()
    .then((response: any) => {
      console.log(response);
      const myObj = response;
      for (const i of myObj) {
        jsonObject += i.album_id + " " + i.album_name + " " + i.album_year + " " + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });
}
export function addMusicAlbumInfo() {
  const musicalbum_id: any = document.getElementById('musicalbum_id');
  const album_id: any = document.getElementById('albumid');
  const titleid: any = document.getElementById('titleid');
  const artistid: any = document.getElementById('artistid');
  const genreid: any = document.getElementById('genreid');
  musicalbumServer.createMusicAlbumObj(Number(musicalbum_id.value), Number(album_id.value), Number(titleid.value),
    Number(artistid.value), Number(genreid.value))
    .then((response: any) => {
      console.log(response);
      document.getElementById('mydata').innerHTML = response;
    });
}
export function getMyMusicAlbum(): void {
  let jsonObject = '';
  musicalbumServer.getMusicALbumData()
    .then((response: any) => {
      console.log(response);
      const myObj = response;
      for (const i of myObj) {
        jsonObject += i.musicalbum_id + " " + i.album_id + " " + i.title_id + " " + i.artist_id + " " + i.genre_id + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });
}
export function getMusicalbumListData() {
  titleServer.getTitlesData()
    .then((response: any) => {
      console.log(response);
      let myObj = response;
      for (const i of myObj) {
        const title = document.getElementById('titleid');
        title.innerHTML = title.innerHTML + '<option value="' + i.title_id + '">' + i.title_name + '</option>';
      }
    });
  albumServer.getALbumData()
    .then((response: any) => {
      console.log(response);
      let myObj = response;
      for (const i of myObj) {
        const album: any = document.getElementById('albumid');
        const albumdata: any = document.getElementById('albumiddata');
        album.innerHTML = album.innerHTML + '<option value="' + i.album_id + '">' + i.album_name + '</option>';
        albumdata.innerHTML = albumdata.innerHTML + '<option value="' + i.album_id + '">' + i.album_name + '</option>';
      }
    });
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log(response);
      let myObj = JSON.parse(response);
      for (const i of myObj) {
        const artist = document.getElementById('artistid');
        console.log(i.artist_id);
        artist.innerHTML = artist.innerHTML + '<option value="' + i.artist_id + '">' + i.artist_name + '</option>';
      }
    });
  genreServer.getGenreData()
    .then((response: any) => {
      console.log(response);
      let myObj = response;
      for (const i of myObj) {
        const genre: any = document.getElementById('genreid');
        genre.innerHTML = genre.innerHTML + '<option value="' + i.genre_id + '">' + i.genre_name + '</option>';
      }
    });
};
export function getMuiscAlbumList() {
  let album: any = document.getElementById('albumiddata');
  musicalbumServer.getByAlbumIdData(Number(album.value))
    .then((response: any) => {
      console.log(response);
      let musicData = '';
      for (const titledata of response.TitleData) {
        musicData += "Title Name :" + titledata.title_name +" " + "Singer:"+titledata.singer+" "+"Director:" +titledata.director+" "+"Lyrisist"+ titledata.lyrisist+'<br>';
      }
      for (const artistdata of response.ArtistData) {
        musicData += "Artist Name :" + artistdata.artist_name + " " + "Profession :" + artistdata.profession + '<br>';
      }
      for (const albumdata of response.albumData) {
        musicData += "Album Name :" + albumdata.album_name + " " + "year :" + albumdata.album_year + '<br>';
      }
      for (const genredata of response.GenreData) {
        musicData += "Genre Type :" + genredata.genre_name;
      }
      document.getElementById('musicAllData').innerHTML = musicData;
    });
}