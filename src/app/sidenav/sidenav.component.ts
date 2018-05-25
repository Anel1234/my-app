import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CanvasComponent } from '..//canvas/canvas.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [DataService]
})
export class SidenavComponent implements OnInit {

  constructor(private dataService: DataService) { }

  notifications = [];
  shouldRun = false;

  getNotifications() {
    this.dataService.getNotifications()
      .subscribe( items => {
        this.notifications = items.Notifications;
      });
  }

  ngOnInit() {
    this.getNotifications();
  }

  iconClick() {
    console.log('hello');
    console.log(this.notifications[0]);
    this.shouldRun = true;
  }

  over() {
    $('.sidemenu').css('left', $('.sideNav').css('width'));
  }

  leave() {
    $('.sidemenu').css('left', 0);
  }

  notificationClick(index, hello) {

    const vm = this;
    this.notifications.forEach(function(element) {
      if (element.NotificationID === index) {
        const notificationID = '#notification' + index;
        $(notificationID).fadeOut(1000, function() {
          vm.notifications.splice(vm.notifications.indexOf(element), 1);
        });
      }
    });
  }

  imageClick() {
    $('.user').hide();
    $('.canvas').show();
  }

  homeClick() {
    $('.canvas').hide();
    $('.user').show();
  }

    // $(notificationID).hide('slow')
    // $(notificationID).fadeOut(1000); //Will give a different animation

    // console.log(hello.srcElement);
    // this.notifications.splice(this.notifications.indexOf(hello.srcElement));
    // const notificationID = '#notification' + index;
    // $(notificationID).fadeOut(2000, function() {
    //   console.log('splicing ' + vm.indexOf(index));
    //   vm.notifications.splice(vm.notifications.indexOf(index - 1));
    // });

    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const value = idAttr.nodeValue;
    // console.log(target);
    // console.log(idAttr);
    // console.log(value);

//   toggle(event: Event): void {
//     console.log((event.target as Element).id);
// }

}
