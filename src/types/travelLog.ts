export enum TravelLogStatus {
  Pending = "待审核",
  Approved = "已通过",
  Rejected = "未通过",
}

export interface TravelLog {
  id: string;
  title: string;
  content: string;
  images: string[];
  video?: string;
  status: TravelLogStatus;
  author: string;
  createTime: string;
}