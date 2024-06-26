import axios, { AxiosResponse } from 'axios';

interface FeedbackData {
  name_report: string;
  contact: string;
  detail_report: string;
  rating: number;
  checktypes: string;
}

// const endpoint = `${process.env.endpoint}/post_feedback`;
const endpoint = 'http://210.246.215.173:8000/post_feedback';

const sendDataToFastAPI = async (data: FeedbackData): Promise<unknown> => {
  try {
    const response: AxiosResponse<unknown> = await axios.post(`${endpoint}`, data, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendDataToFastAPI;
