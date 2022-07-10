
const SCHOOL_URL = 'http://universities.hipolabs.com/search?name=';

export const postRequest = (url: string, data: any) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });


export const getSchools = (query: string) => fetch(`${SCHOOL_URL}${query}`);