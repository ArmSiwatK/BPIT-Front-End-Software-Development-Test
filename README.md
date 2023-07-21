## Installation

1. Clone the repository:

```
git clone https://github.com/ArmSiwatK/BPIT-Front-End-Software-Development-Test.git
cd your-project
```

2. Install the project dependencies:

```
npm install
```

or

```
yarn install
```

## Development

To start the development server and run the project locally, use the following commands:

```
npm run dev
```

or

```
yarn dev
```

## Issues

- The library I ended up using for the promotion chart is [react-d3-tree](https://github.com/bkrem/react-d3-tree). It is conveniently draggable and zoomable. However, these features do not extend to the background. As a result, the background does not move with the chart. As a placeholder, I have implemented a basic gradient and color-coded the category part of the nodes based on job grade.

- There is only one promotion page, the page for Technical Engineer. Though at this point, I believe it suffices as a mockup to show that the page works.

- The job criteria currently only looks for exact matches, and does not take into account of the fact that these criteria look for Greater-than-or-Equal-to. I believe this is beyond the scope of a mockup, and design considerations at that level would require being aware of all the data I am expected to work with.
