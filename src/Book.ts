export type Book = {
  title: string,
  author: string[] | string
  status?: Status
  pages?: number
}

export enum ReadingStatus {
  CurrentlyReading,
  Completed,
  ReReading,
  Abandoned
}

type Status = {
  readingStatus: ReadingStatus,
  currentPage?: number
}