export const postRequest = (url: string, data: any) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getResponse = (url: string) => fetch(url);