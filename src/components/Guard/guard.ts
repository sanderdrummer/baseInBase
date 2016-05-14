///<reference path="../../../dist/Excalibur.d.ts" />

class Guard extends ex.Actor {

    velocity: number;
    lightStartPoint: ex.Point;
    fovLength: number;
    travelVector: ex.Vector;

    constructor(x: number, y: number, width: number, height: number, color: ex.Color) {
        super(x, y, width, height, color);

        // physics
        this.velocity = 1;
        this.lightStartPoint = new ex.Point(this.x + this.getWidth(), this.y + this.getHeight() / 2);
        this.fovLength = 300;
        this.travelVector = new ex.Vector(1, 0);

        // set collisions active
        this.collisionType = ex.CollisionType.Passive;
    }

    handleKeyInput(evtObj: ex.GameEvent) {
        console.log(evtObj);
    }

    onInitialize(engine: ex.Engine) {
        this.moveTo(100, 100, 50)
            .delay(3000)
            .moveTo(0, 200, 50)
            .delay(3000)
            .repeatForever();
    }

    update(engine: ex.Engine, delta) {
        super.update(engine, delta);

    }
    public draw(ctx: CanvasRenderingContext2D, delta: number) {
        super.draw(ctx, delta);
        this.drawFOV(this.lightStartPoint, ctx, delta);

        // if (this.alertStatus === AlertStatus.Attack) {
        //     this.alertSprite.draw(ctx, this.getCenter().x + Config.enemyAlertOffsetX - this.alertSprite.width / 2, this.getCenter().y + Config.enemyAlertOffsetY - this.alertSprite.height / 2);
        // }
    }

    private drawFOV(point: ex.Point, ctx: CanvasRenderingContext2D, delta: number): void {

        // create radial gradient
        var fovRay = new ex.Ray(point, this.travelVector);
        var fovEndPoint = fovRay.getPoint(this.fovLength);

        var grd = ctx.createRadialGradient(point.x, point.y, 10, fovEndPoint.x, fovEndPoint.y, this.fovLength / 2);
        // if (false) {
        //     grd.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        //     grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
        // } else {
            grd.addColorStop(0, 'rgba(255, 150, 150, 0.3)');
            grd.addColorStop(1, 'rgba(255, 150, 150, 0)');
        // }

        ctx.fillStyle = grd;
        ctx.beginPath();
        // x, y, radius, start, end, [anti-clockwise]
        ctx.arc(this.getCenter().x, this.getCenter().y, this.fovLength - 200, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }
}

export = Guard;