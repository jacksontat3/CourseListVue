import http from '../http-common';
import { Course } from '../types';

class CourseDataService {
  getAll() {
    console.log('getting all');
    return http.get("/courses");
  }
  get(id: number) {
    return http.get(`/courses/${id}`);
  }
  create(data: Course) {
    return http.post("/courses", data);
  }
  update(id: number, data: Course) {
    return http.put(`/courses/${id}`, data);
  }
  delete(id: number) {
    return http.delete(`/courses/${id}`);
  }
  findByTitle(title: string) {
    return http.get(`/courses?title=${title}`);
  }
}
export default new CourseDataService();