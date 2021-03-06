export type Input = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  options?: string[];
  required: boolean;
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
    '2035',
    '2034',
    '2033',
    '2032',
    '2031',
    '2030',
    '2029',
    '2028',
    '2027',
    '2026',
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
    '2000',
    '1999',
    '1998',
    '1997',
    '1996',
    '1995',
    '1994',
    '1993',
    '1992',
    '1991',
    '1990',
    '1989',
    '1988',
    '1987',
    '1986',
    '1985',
    '1984',
    '1983',
    '1982',
    '1981',
    '1980',
  ];
  const inputs: Input[] = [
    {
      id: 1,
      name: 'university',
      type: 'text',
      placeholder: 'University ',
      errorMessage: 'Please enter university',
      required: true,
    },
    {
      id: 2,
      name: 'degree',
      type: 'text',
      placeholder: 'Degree',
      errorMessage: 'You should enter degree',
      required: false,
    },
    {
      id: 3,
      name: 'field_of_study',
      type: 'text',
      placeholder: 'Field of study',
      errorMessage: 'You should enter field of study',
      required: false,
    },
    {
      id: 4,
      name: 'start_date_month',
      type: 'select',
      placeholder: 'Start month',
      errorMessage: 'You should enter month',
      options: month,
      required: false,
    },
    {
      id: 5,
      name: 'start_date_year',
      type: 'select',
      placeholder: 'Start year',
      errorMessage: 'You should enter year',
      options: year,
      required: false,
    },
    {
      id: 6,
      name: 'end_date_month',
      type: 'select',
      placeholder: 'End month',
      errorMessage: 'You should enter month',
      options: month,
      required: false,
    },
    {
      id: 7,
      name: 'end_date_year',
      type: 'select',
      placeholder: 'End year',
      errorMessage: 'You should enter year',
      options: year,
      required: false,
    },
    {
      id: 8,
      name: 'grade',
      type: 'text',
      placeholder: 'Grade',
      errorMessage: 'You should enter grade',
      required: false,
    },
    {
      id: 9,
      name: 'activities',
      type: 'text',
      placeholder: 'Activities',
      errorMessage: 'You should enter activities',
      required: false,
    },
    {
      id: 10,
      name: 'description',
      type: 'text',
      placeholder: 'Description',
      errorMessage: 'You should enter description',
      required: false,
    },
  ];

  return inputs;
};


export const fields = () => {
  return {
    university: '',
    degree: '',
    field_of_study: '',
    start_date_month: '',
    start_date_year: '',
    end_date_month: '',
    end_date_year: '',
    grade: '',
    activities: '',
    description: '',
  }
}