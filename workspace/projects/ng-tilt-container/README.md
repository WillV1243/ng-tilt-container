# NgTiltContainer

Requires Angular 10.x

![Demo gif of ng-tilt-container](https://github.com/WillV1243/ng-tilt-container/blob/master/workspace/projects/ng-tilt-container/src/assets/demo.gif)

## Install

`npm install ng-tilt-container --save`

```Typescript
import { NgTiltContainerModule } from 'ng-tilt-container';
 
@NgModule({
  imports: [ NgTiltContainerModule ],
  ...
})
```
Make sure to have rxjs ^6.5.5 installed in your node-modules

## How to use

```html
  <ng-tilt-container
    [updateRate]="number"
    [transitionDuration]="string"
    [perspectiveValue]="string">

    <!-- your content goes here -->

  </ng-tilt-container>
```
```Typescript
updateRate: number = 10;
transitionDuration: string = '400ms';
perspectiveValue: string = '40px';
```

`updateRate`: Determines how many ticks of mouse movement it requires to update animation, lower = more updates

`transitionDuration`: CSS value for length of animation, lower = quicker response when mouse moves

`perspectiveValue`: CSS value for how strong the rotation will look when animation happens, lower = stronger rotation

ng-tilt-container will be sized depending on the content within the container.

### License

License: MIT

Copyright (c) 2020 William Vandepeer

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

