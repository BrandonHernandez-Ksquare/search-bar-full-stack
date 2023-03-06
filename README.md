# Full Stack Code Challenge: The GameStop's Search Bar

The popular video games store GameStop is working on a Proof of Concept for improve their Search Bar User Experience. The Product Owner wants a Search bar that auto-search the user's input after the user finish typing, the team lead wants to avoid unnecessary process when the user is typing, so in order to achieve that you must:

## Back-end

#### Acceptance & Criteria
1. Create a basic NodeJS + Express server under `server` directory
2. The server needs to have an endpoint called `video-games` which needs to return the videogame list inside the JSON file under `mock-db` directory.
3. The `video-games` endpoint could receive a `query` parameter called `search`, the value of search will filter the video games list before return it. The endpoint needs to filter by developer, video game title and release year using the value of `search`.

## Front-end

#### Acceptance & Criteria

1. When the application loads, by default it shows the entire video game list (calling to the previous `video-games` endpoint that you created). There's an existing component for display the video games list called `PreviewOutlet`, please, use it.
2. Implement a way to search when the Search bar's input change. The customer does not want a button, the search needs to start after the user finish typing. The input search bar needs to have a delay before fetch the list. `5000ms`, for instance. (Extra points if you use a `customHook` for resolve this requirement, but not mandatory).

