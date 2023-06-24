const ellipse = {
    width: 10,
    height: 5,
    getArea() { console.log ( Math.PI * this.width * this.height ) },
    getPerimeter() { return 2 * Math.PI * Math.sqrt( (this.width ** 2 + this.height ** 2) / 2); },
    getEccentricity() { console.log ( Math.sqrt( 1 - Math.pow( (this.height / this.width ), 2 ) ) ); }
};