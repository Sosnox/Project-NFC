import axios, { AxiosResponse } from 'axios';

interface FeedbackData {
  name_report: string;
  contact: string;
  detail_report: string;
  rating: number;
  checktypes: string;
}

const sendDataToFastAPI = async (data: FeedbackData): Promise<unknown> => {
  try {
    const response: AxiosResponse<unknown> = await axios.post('/api/feedback', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendDataToFastAPI;
