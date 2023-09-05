import OpenAI from 'openai';
import { GPT_OPENAI_KEY } from '../constant/Constant';

const openai = new OpenAI({
  apiKey: GPT_OPENAI_KEY,
  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai; 