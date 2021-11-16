import {gsap} from "gsap";
import Point from "./ts/utils/point";
window.onload=function(){
    const canvas=<HTMLCanvasElement>document.getElementById("my-canvas")
    const context=canvas.getContext("2d")
    const carPosition=new Point(10,10)
    const car=new Image();
    car.onload=function(){
        gsap.to(carPosition,{
            duration:10,
            x:350,
            // y:100,
            ease:"expo.out",
            onUpdate:function(){
                context.clearRect(0,0,canvas.width,canvas.width)
                context.drawImage(car,carPosition.x,carPosition.y,48,18.86)
            }
        })
        context.drawImage(car,carPosition.x,carPosition.y,48,18.86)
    }
    car.src="./assets/download.png"
    const cirle1=<HTMLDivElement>document.getElementById("crawl")
    gsap.fromTo(cirle1,{top:310,left:0},{top:610,left:0,duration:10,ease:"bounce.out"})
}