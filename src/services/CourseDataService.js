import http from '../http-common';
class CourseDataService {
  getAll() {
    console.log('getting all');
    return http.get("/courses");
  }
  get(id) {
    return http.get(`/courses/${id}`);
  }
  create(data) {
    return http.post("/courses", data);
  }
  update(id, data) {
    return http.put(`/courses/${id}`, data);
  }
  delete(id) {
    return http.delete(`/courses/${id}`);
  }
  findByTitle(title) {
    return http.get(`/courses?title=${title}`);
  }
}
export default new CourseDataService();