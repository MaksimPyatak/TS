/**
     * Facade з'єднує рамки потрібного розміру з картинами такогож розміру
*/
class Facade {
    protected frameFactory: FrameFactory;
    protected pictureFactory: PictureFactory;

    constructor(frameFactory?: FrameFactory, pictureFactory?: PictureFactory) {
        this.frameFactory = frameFactory || new FrameFactory;
        this.pictureFactory = pictureFactory || new PictureFactory;
    }

    /**
     * PictureWithFrame3x4
     */
    public pictureWithFrame3x4() {
        let result = `${this.pictureFactory.picture3x4()} в ${this.frameFactory.frame3x4()}`
        return result;
    }
    /**
     * PictureWithFrame10x15
     */
    public pictureWithFrame10x15() {
        let result = `${this.pictureFactory.picture10x15()} в ${this.frameFactory.frame10x15()}`
        return result;
    }
}
/**
 * FrameFactory створює рамки для картин
 */

class FrameFactory {
    public introduction(): string {
        return ``
    }
    /**
     * frame 3x4
     */
    public frame3x4() {
        return  `рамці 3х4`
    }
    
    /**
     * frame 10x15
     */
    public frame10x15() {
        return `рамці 10х15`
    }  
}

/**
     * PictureFactory створює картини
*/
class PictureFactory {
    
    public introduction() {
        return ``
    }
    /**
     * picture3x4
     */
    public picture3x4() {
        return `Картина 3х4`
    }
    /**
     * picture10x15
     */
    public picture10x15() {
        return `Картина 10х15`
    }
}

const frame = new FrameFactory();
const picture = new PictureFactory();
const pictureInFeame = new Facade(frame, picture);

console.log(pictureInFeame.pictureWithFrame10x15());
console.log(pictureInFeame.pictureWithFrame3x4());
