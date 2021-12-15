import { UserProfile } from "interfaces";

const user = {
  company: "test",
  country: "ss",
  duns: "33",
  email: "malec@u.plus",
  id: 3,
  job_title: "job",
  name: "Jaromir Malec",
  phone_number: "731808443",
  updated_at: "2021-12-09T17:14:24.936022Z",
  username: "malec@u.plus",
} as UserProfile;

export const inquiries = [
  {
    title: "Mica initiative",
    part: "brakes",
    sentOn: "09.04.2021",
    dueDate: "05.01.2022",
    status: "pending",
    owner: user,
  },
  {
    title: "CO2 footprint",
    part: "brakes",
    sentOn: "09.04.2021",
    dueDate: "05.01.2022",
    status: "completed",
    owner: user,
  },
];

export const questions = [
  {
    title: "Number question",
    index: 1,
    field_type: "number",
    extra_fields: "",
    placeholder: "Number question placeholder",
    helper_text: "help",
  },

  {
    title: "Text question",
    index: 2,
    field_type: "text",
    extra_fields: "",
    placeholder: "Text question placeholder",
    helper_text: "help",
  },
  {
    title: "Dropdown question",
    index: 3,
    field_type: "dropdown",
    extra_fields: "test1, test2, test3",
    placeholder: "Dropdown question placeholder",
    helper_text: "help",
  },
  {
    title: "Checkbox question",
    index: 4,
    field_type: "checkbox",
    extra_fields: "test1, test2, test3",
    placeholder: "Checkbox question placeholder",
    helper_text: "help",
  },
  {
    title: "Date question",
    index: 5,
    field_type: "date",
    extra_fields: "",
    placeholder: "Date question placeholder",
    helper_text: "help",
  },
  {
    title: "Radio question",
    index: 6,
    field_type: "radio",
    extra_fields: "test1, test2, test3",
    placeholder: "Radio question placeholder",
    helper_text: "help",
  },
];

export const subsections = [
  { title: "Subsection 1", questions },
  { title: "Subsection 2", questions: [questions[0]] },
  { title: "Subsection 3", questions },
];

export const sections = [
  { title: "Section 1", subsections },
  { title: "Section 2", subsections: [subsections[0]] },
  { title: "Section 3", subsections },
];
