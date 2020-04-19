import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CoursesService } from "../courses.service";
import { Router } from "@angular/router";

@Component({
  selector: "tr[app-courserow]",
  templateUrl: "./courserow.component.html",
  styleUrls: ["./courserow.component.css"],
})
export class CourserowComponent implements OnInit {
  @Output("deleteFn") deleteFn: EventEmitter<any> = new EventEmitter();
  @Input() course: any;
  constructor(private service: CoursesService, private router: Router) {}

  ngOnInit(): void {}
  edit(e) {
    this.router.navigate(["./courses/edit/" + e]);
  }
  delete(e) {
    this.deleteFn.emit();
    console.log("emitted");
  }
}
