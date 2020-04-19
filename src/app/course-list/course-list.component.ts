import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../courses.service";
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }
  getAllCourses() {
    this.service.getAllCourses().subscribe((data: any) => {
      console.log(data);
      this.courses = data;
    });
  }
  delete(e) {
    console.log("kkk");
  }
  deleteFn(e) {
    this.service.deleteCourse(e).subscribe((data) => {
      this.getAllCourses();
    });
  }
}
