# react-es2015

Experimental - test ES2015 version of React as a way to reduce the bundle size.

Requirement:
* must have same feature set.
* minimum target es2015 version.
* CDN available. UMD is not required.

Possible options:
* transpile from ES5 to ES2015 with e.g. https://github.com/lebab/lebab/
* remove UMD and use VAR
* remove custom polyfills such as object-assign.
* move license info to a separate file.
* use the React source code, refactor to ES2015 and compile to ES2015.
