import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  public canvas;
  public ctx;

  drawShape() {

    const vm = this;

    vm.ctx.beginPath();
    vm.ctx.moveTo(170, 80);
    vm.ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
    vm.ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
    vm.ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
    vm.ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
    vm.ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
    vm.ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);

    // complete custom shape
    vm.ctx.closePath();
    vm.ctx.lineWidth = 5;
    vm.ctx.fillStyle = '#8ED6FF';
    vm.ctx.fill();
    vm.ctx.strokeStyle = 'blue';
    vm.ctx.stroke();

  }

  uploadImage(newImage) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.patch('http://localhost:8080/api/image/5afaf01dfd680f34178d1307', newImage, {headers: headers}).pipe(
      map( res => res.json()));
  }

  changeUserName() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.patch('http://localhost:8080/api/user/5afaf01dfd680f34178d1307', {headers: headers}).pipe(
      map( res => res.json()));
  }

  constructor(private http: Http) {
  }

  ngOnInit() {

    const vm = this;

    vm.canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    vm.ctx = vm.canvas.getContext('2d');
    vm.drawShape();

    const dataURL = vm.canvas.toDataURL();
    this.uploadImage(dataURL);
  }

}
