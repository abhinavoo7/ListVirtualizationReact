# List Virtualization React

A simple React app demonstrating list virtualization: efficiently rendering only the visible portion of a large list for better performance.

## Features

- **Virtualized Rendering:** Only visible items are rendered to the DOM.
- **Customizable:** Easily adjust item and container height.
- **Performance Optimized:** Uses throttling for scroll events.

## Project Structure

- `src/VirtualizedList/VirtualizedList.jsx` – Virtualized list component.
- `src/lib/Constants.js` – Sample user data.
- `src/utils/utils.js` – Utility functions (e.g., `throttle`).
- `src/App.js` – App entry, renders the virtualized list.
- `src/index.js` – React app bootstrap.

## Getting Started

### Installation

```sh
git clone https://github.com/your-username/ListVirtualizationReact.git
cd ListVirtualizationReact
npm install

```

### Running the app

````sh
npm start

Visit http://localhost:3000 in your browser.

Usage
The VirtualizedList component accepts:

items (array): List of items to display (each with id and name).
itemHeight (number): Height of each item in pixels.
containerHeight (number): Height of the scrollable container in pixels.
Example in App.js:

```js
<VirtualizedList items={USER_DATA} containerHeight={500} itemHeight={30} />
````
