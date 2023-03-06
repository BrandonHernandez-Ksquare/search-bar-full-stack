interface GetParams {
  like: string | undefined;
}
export const VideoGamesManager = {
  get(params?: GetParams) {
    return fetch(`http://localhost:9090/video-games/${params?.like ? `?like=${params.like}` : '' }`, { method: 'GET'  })
      .then((streamResponse) => streamResponse.json())
      .then((response) => response.results)
      .catch((e) => {
        console.error(e);
      })
  }
}
