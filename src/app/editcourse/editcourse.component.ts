import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../courses.service";

@Component({
  selector: "app-editcourse",
  templateUrl: "./editcourse.component.html",
  styleUrls: ["./editcourse.component.css"],
})
export class EditcourseComponent implements OnInit {
  courseForm: FormGroup;
  id: number;
  currentCourse;
  course: any = {
    id: "",
    title: "",
    duration: "",
    "duration-unit": "",
    description: "",
  };
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.courseForm = this.formBuilder.group({
      title: ["", Validators.required],
      ordername: ["", Validators.required],
      duration: ["", Validators.required],
      duration_unit: [""],
      description: [""],
    });
    this.getSingleCourse(this.id);
  }
  get f() {
    return this.courseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.courseForm.value);
    this.course = {
      id: this.id,
      title: this.courseForm.value.title,
      duration: this.courseForm.value.duration,
      "duration-unit": this.courseForm.value.duration_unit,
      description: this.courseForm.value.description,
    };
    this.updateCourse(this.course);
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.courseForm.reset();
  }
  getSingleCourse(id) {
    this.service.getOneCourse(id).subscribe((data: any) => {
      console.log(data);
      this.courseForm.patchValue({
        title: data.title,
        duration: data.duration,
        duration_unit: data["duration-unit"],
        description: data.description,
      });
    });
  }
  updateCourse(course) {
    this.currentCourse = Object.assign({}, course);

    this.service.updateCourse(this.currentCourse).subscribe((data) => {
      this.router.navigate(["/courses"]);
    });
  }
}
