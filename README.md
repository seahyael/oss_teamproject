# 음악 플레이리스트 사이트 기획서

## 조건
- Open API 사용
- Mock API 사용
- 리액트 프론트엔드 라이브러리
- 현재 서비스되고 있는 사이트의 레이아웃 클론하기

## 주제
음악 플레이리스트 사이트

## 기능

### CRUD 기능
- **C (Create)**: 스포티파이에서 곡 정보를 가져와서 Mock API에 POST
  - 데이터 형식:
    ```json
    {
      "name": track['name'],
      "artist": track['artists'][0]['name'],
      "album": track['album']['name'],
      "release_date": track['album']['release_date'],
      "popularity": track['popularity'],
      "url": track['external_urls']['spotify'],
      "favorite": false
    }
    ```

- **R (Read)**: Mock API에서 플레이리스트 정보 읽기

- **U (Update)**: 플레이리스트의 순서나 기타 정보를 수정하여 PUT

- **D (Delete)**: 플레이리스트에서 곡 삭제

## 클론할 사이트
- [Apple Music - Today's Hits](https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb)
- [Wynk Music - Weekly Top 20 English](https://wynk.in/music/playlist/weekly-top-20-english/bb_1527140401220?ref=sub_header)
