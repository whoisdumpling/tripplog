import { TravelLog, TravelLogStatus } from "../types/travelLog";

const mockTravelLogs: TravelLog[] = [
  {
    id: "1",
    title: "我的第一次旅行",
    content: "这是一次难忘的旅行...",
    images: ["image1.jpg", "image2.jpg"],
    video: "video1.mp4",
    status: TravelLogStatus.Approved,
    author: "用户A",
    createTime: "2025-05-01",
  },
  {
    id: "2",
    title: "探索自然",
    content: "大自然的美丽令人惊叹...",
    images: ["image3.jpg"],
    status: TravelLogStatus.Pending,
    author: "用户B",
    createTime: "2025-05-05",
  },
];

export const getTravelLogs = (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return mockTravelLogs.slice(start, end);
};

export const getTravelLogById = (id: string) => {
  return mockTravelLogs.find((log) => log.id === id) || null;
};

export const createOrUpdateTravelLog = (log: TravelLog) => {
  const index = mockTravelLogs.findIndex((item) => item.id === log.id);
  if (index > -1) {
    mockTravelLogs[index] = log;
  } else {
    mockTravelLogs.push({ ...log, id: `${mockTravelLogs.length + 1}` });
  }
  return log;
};

export const deleteTravelLog = (id: string) => {
  const index = mockTravelLogs.findIndex((log) => log.id === id);
  if (index > -1) {
    mockTravelLogs.splice(index, 1);
    return true;
  }
  return false;
};