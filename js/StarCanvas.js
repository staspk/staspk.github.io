function random_float(min, max) { 
    return min + Math.random() * (max-min);
}

class Vector2 {
    constructor(x, y) { this.x = x; this.y = y; }
}
class Vector3 {
    constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
}

class StarCanvas {
    stars = [];
    starCount = 0; speed = 100; maxDepth = 1000; maxSize = 3;

    fps = 0; fpsCount = 0; fpsTime = 0; lastFrame = 0;

    origin = new Vector2(0, 0);

    constructor() {
        this.canvas = document.getElementById('background-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.resize(document.documentElement.clientWidth, document.documentElement.clientHeight)
        window.addEventListener('resize', () => {
            this.resize(window.document.documentElement.clientWidth, window.document.documentElement.clientHeight);
        });

        this._resetOrigin();
        this.stars.length = 0;
        this._initStars();
    }

    _resetOrigin() {
        this.origin.x = this.canvas.width / 2;
        this.origin.y = this.canvas.height / 2;
    }

    _initStars() {
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push(
            new Vector3(
                random_float(-this.canvas.width, this.canvas.width),
                random_float(-this.canvas.height, this.canvas.height),
                random_float(1, this.maxDepth))
            );
        }
    }

    setStarField(starSpeed, starCount) {
        if(starSpeed)
            this.speed = starSpeed;

        if(starCount) {
            starCount = Math.floor(starCount);

            if (starCount < this.stars.length) {
                this.starCount = starCount;
                this.stars.length = starCount;
            }
            else {
                var count = starCount - this.stars.length;
                
                for(let i = 0; i < count; i++) {
                    this.stars.push(
                    new Vector3(
                        random_float(-this.canvas.width,this.canvas.width), 
                        random_float(-this.canvas.height,this.canvas.height), 
                        random_float(1, this.maxDepth)
                    ));	
                }
            }

		
            // this.stars.length = starCount - 1;
            // // starCount < this.stars.length;
            // this.starCount = starCount;
        }
            
    }

    resize(width, height) {
        this.canvas.width = width;  this.canvas.height = height;
        this.canvas.style.width = width + "px";  this.canvas.style.height = height + "px";

        this.img_data = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this._resetOrigin();
    }

    print() {
        console.log `Amount: ${this.stars}. Speed: ${this.speed}. MaxDepth: ${this.maxDepth}. MaxSize: ${this.maxSize}.`
        console.log `FPS: ${this.fps}. FpsCount: ${this.fpsCount}. FpsTime: ${this.fpsTime}. LastFrame: ${this.lastFrame}.`
        console.log `Origin: ${this.origin.x}, ${this.origin.y}`
    }

    update(time) {
        let deltaTime = (time - this.lastFrame)*0.001;
        this._updateStars(deltaTime);

        this._drawRects();
        this.lastFrame = time;
    }

    _updateStars(deltaTime) {
        let distance = this.speed * deltaTime;

        for (let i = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            star.z -= distance;
            if (star.z <= 0) {
                star.x = random_float(-this.canvas.width, this.canvas.width);
                star.y = random_float(-this.canvas.height, this.canvas.height);
                star.z = this.maxDepth;
            }
        }
    }

    _drawRects() {
        this.ctx.fillStyle = 'rgb(204, 114, 234)';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            let k = 256 / star.z;
            let x = star.x*k + this.origin.x;
            let y = star.y*k + this.origin.y;
            let size = ((this.maxDepth-star.z)/this.maxDepth) * this.maxSize;
            this.ctx.fillRect(x, y, size, size);
        }
    }

    /**
    * Can probably be used make a whirlwhind, horizontal star movement to match View animations
    */
    setOrigin(x, y) {
        this.origin.x = x;
        this.origin.y = y;
    }

    // _drawFps() {
    //     this.fpsTime += deltaTime;
    //     this.fpsCount++;

    //     if(this.fpsTime > 1) {
    //         this.fps = Math.floor(this.fpsCount/this.fpsTime);
    //         this.fpsTime = 0;
    //         this.fpsCount = 0;
    //     }
    // }
}
