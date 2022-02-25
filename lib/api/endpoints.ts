import http from './http';

class ApiService {
  //   get(): Promise<any> {
  //     return http.get("/endpoint");
  //   }
  //   post(data: any): Promise<any> {
  //     return http.post("/endpoint", data);
  //   }

  // send email with emailjs:
  // https://www.emailjs.com/docs/rest-api/send/
  emailjsSend(data: any): Promise<any> {
    const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';
    return http.post(endpoint, data);
  }
}

export default new ApiService();
