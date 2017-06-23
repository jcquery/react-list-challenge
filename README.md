# react-list-challenge
A React component made to handle a silly number of records at once.

The goal was to build a component that could handle 100,000 records at once (recieved, say, from an AJAX request) client-side and allow sorting, pagination, and adjusting of the page size. Shoving a giant array in state seemed like a terrible idea, so I made a simple web worker to act as my model. 

The web worker behaves basically as a class and exposes a few methods for initialization, sorting, and user updates to the part of the array they're looking at (that is, pagination and page size). Going forward, I'd like to actually test its performance vs. a non-worker solution, but it seems relatively performant. Resorting takes a couple seconds, but aside from caching possible resorts (which also has downsides, considering there's already 20mb of JSON involved), other solutions would probably have to do the same work.

A couple UX notes: 
* Upon resorting or changing the page size, the page number is set back to 1. Depending on one's priorities, there might be more user-friendly approaches, but for the perposes of this component, I thought it best to keep things simple and consistent.
* When waiting on a sort, interaction is disabled so as to not confuse anyone with unexpected results caused by furious clicking during a load. There's a loading spinner and a wait pointer to show that something's happening, so the hope is that those provide enough clairity. 

Per usual, to get the thing running:
```
npm install
npm start
```
