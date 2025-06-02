#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size); // Call the Rectangle constructor with width and height as size
  }
}

module.exports = Square;
