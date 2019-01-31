# rollup-multi-entry-example

This repository is to demonstrate importing a bundled library.

Run the following:
- `clear && cd component-library && yarn && yarn build`
- `clear && cd ../application && yarn && yarn start`

This will produce an error importing a component `ContainerComponent` from the component-library. This is because rollup multi entry cannot import the default export of a file.
