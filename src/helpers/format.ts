export type Input = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  options?: string[];
};

export const BuildFormElements = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
  ];
  const inputs: Input[] = [
    {
      id: 1,
      name: 'university',
      type: 'text',
      placeholder: 'University ',
      errorMessage: 'Please enter university',
    },
    {
      id: 2,
      name: 'degree',
      type: 'text',
      placeholder: 'Degree',
      errorMessage: 'You should enter degree',
    },
    {
      id: 3,
      name: 'field_of_study',
      type: 'text',
      placeholder: 'Field of study',
      errorMessage: 'You should enter field of study',
    },
    {
      id: 4,
      name: 'start_date_month',
      type: 'select',
      placeholder: 'Month',
      errorMessage: 'You should enter month',
      options: month,
    },
    {
      id: 5,
      name: 'start_date_year',
      type: 'select',
      placeholder: 'Year',
      errorMessage: 'You should enter year',
      options: year,
    },
    {
      id: 6,
      name: 'end_date_month',
      type: 'select',
      placeholder: 'Month',
      errorMessage: 'You should enter month',
      options: month,
    },
    {
      id: 7,
      name: 'end_date_year',
      type: 'select',
      placeholder: 'Year',
      errorMessage: 'You should enter year',
      options: year,
    },
    {
      id: 8,
      name: 'grade',
      type: 'text',
      placeholder: 'Grade',
      errorMessage: 'You should enter grade',
    },
    {
      id: 9,
      name: 'activities',
      type: 'text',
      placeholder: 'Activities',
      errorMessage: 'You should enter activities',
    },
    {
      id: 10,
      name: 'description',
      type: 'text',
      placeholder: 'Description',
      errorMessage: 'You should enter description',
    },
  ];

  return inputs;
};

