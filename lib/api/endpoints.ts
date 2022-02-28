import http from './http';
import { EmailJSSendParams } from './model';
import config from '../../config'

class ApiService {
  //   get(): Promise<any> {
  //     return http.get("/endpoint");
  //   }
  //   post(data: any): Promise<any> {
  //     return http.post("/endpoint", data);
  //   }

  // send email with emailjs:
  // https://www.emailjs.com/docs/rest-api/send/
  emailjsSend(data: EmailJSSendParams): Promise<any> {
    const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';
    const params = {
      service_id: config.emailjs.service_id,
      template_id: config.emailjs.template_id,
      user_id: config.emailjs.user_id,
      template_params: data
  }
    return http.post(endpoint, params);
  }
}

export default new ApiService();
