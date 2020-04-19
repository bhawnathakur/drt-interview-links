import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class CoursesService {

  url_json = "http://localhost:4243/courses";
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url_json, headerOption);
  }
  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(this.url_json + "/" + id, headerOption);
  }
  getOneCourse(id) {
    console.log("hi");
    return this.http.get(this.url_json + "/" + id, headerOption);
  }
  updateCourse(info){
    console.log("from service :"+ info)
    return this.http.put(this.url_json + "/" + info.id , info, headerOption);
  }
}
export interface Course {
  id: number;
  title: string;
  duration: number;
  "duration-unit": string;
  description: string;
}
