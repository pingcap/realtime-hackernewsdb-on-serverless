import axios from 'src/utils/axios';

const TOEKN = `dGVzdCBobiBjaGF0MnF1ZXJ5`;

export function postQuestion(question: string) {
  return axios
    .post('/api/question', {
      question,
      token: TOEKN,
    })
    .then((response) => response.data);
}
