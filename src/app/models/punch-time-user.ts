export interface PunchTimeResponse {
  code: number;
  message: string;
  data: Data;
  error: string;
}
export interface Data {
  updatedEmployee: UpdatedEmployee;
  punchRecord: PunchRecord;
}
export interface UpdatedEmployee {
  _id: string;
  emp_firstname: string;
  emp_lastname: string;
  emp_id: number;
  nfc_card_id: string;
  punch_status: string;
  punch_note: string;
  timezone: string;
  datetime: Date;
  emp_avatar: string;
  __v: number;
}

export interface PunchRecord {
  _id: string;
  emp_id: string;
  date: Date;
  punch_in_time: Date;
  punch_out_time: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
