class Education {
  user_id: string;
  university: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  grade: string;
  activities: string;
  description: string;

  constructor(
    user_id: string,
    university: string,
    degree: string,
    field_of_study: string,
    start_date: string,
    end_date: string,
    grade: string,
    activities: string,
    description: string
  ) {
    this.university = university;
    this.degree = degree;
    this.field_of_study = field_of_study;
    this.start_date = start_date;
    this.end_date = end_date;
    this.grade = grade;
    this.activities = activities;
    this.description = description;
    this.user_id = user_id;
  }
}

export default Education;
