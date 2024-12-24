export type Book = {
  title: string,
  author: string[] | string
  status: Status | null
  pages: number | null
}

export enum ReadingStatus {
  CurrentlyReading,
  Completed,
  ReReading,
  Abandoned
}

type Status = {
  readingStatus: ReadingStatus,
  currentPage: number | null
}