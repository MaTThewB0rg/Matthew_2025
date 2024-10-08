import Player from './Player.js';

class sprite extends Player {
    constructor(imageSrc = null) {
        super(imageSrc);
    }

    update() {
        super.update();
    }

    resize() {
        super.resize();
    }

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'I' key
                this.velocity.y -= this.yVelocity;
                this.direction = 'up';
                break;
            case 65: // 'J' key
                this.velocity.x -= this.xVelocity;
                this.direction = 'left';
                break;
            case 83: // 'K' key
                this.velocity.y += this.yVelocity;
                this.direction = 'down';
                break;
            case 68: // 'L' key
                this.velocity.x += this.xVelocity;
                this.direction = 'right';
                break;
        }
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 87: // 'I' key
                this.velocity.y = 0;
                break;
            case 65: // 'J' key
                this.velocity.x = 0;
                break;
            case 83: // 'K' key
                this.velocity.y = 0;
                break;
            case 68: // 'L' key
                this.velocity.x = 0;
                break;
        }
    }
}

export default sprite1;
