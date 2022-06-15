export interface ValidationResponse {
  code: number;
  message: string;
  data: Data;
  error: string;
}
export interface Data {
  status: number;
}
