import {
  Typography,
  Paper,
  Grid,
  Card,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Book, ReadingStatus as Status } from "./Book";
import { useTheme } from "@mui/material/styles";

export default function Library() {
  const theme = useTheme();
  const bookIconColors = [
    theme.palette.bookIconColors.color1,
    theme.palette.bookIconColors.color2,
    theme.palette.bookIconColors.color3,
    theme.palette.bookIconColors.color4,
  ];

  const books: Book[] = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 206,
      status: {
        readingStatus: Status.CurrentlyReading,
        currentPage: 107,
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      pages: 407,
      status: {
        readingStatus: Status.CurrentlyReading,
        currentPage: 203,
      },
    },
    {
      title: "Fart Science for Kids",
      author: "George Poopwell",
      pages: 345,
      status: {
        readingStatus: Status.CurrentlyReading,
        currentPage: 203,
      },
    },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography fontWeight="bold" gutterBottom>
        Currently Reading:
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Grid container spacing={1}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 1,
                gap: 1,
              }}
            >
              <BookIcon
                sx={{
                  color: bookIconColors[index % bookIconColors.length],
                  fontSize: "32px",
                }}
              />
              <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                <Typography
                  fontWeight="bold"
                  fontSize="15px"
                  noWrap
                  title={book.title}
                >
                  {book.title}
                </Typography>
                <Typography
                  fontSize="13px"
                  color="text.secondary"
                  noWrap
                >
                  {book.author}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    marginTop: 0.5,
                  }}
                >
                  <Typography fontSize="11px" sx={{ marginRight: "4px" }}>
                    Pages: {book.status?.currentPage} / {book.pages}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexShrink: 0, gap: 0.5 }}>
                <IconButton
                  size="small"
                  color="secondary"
                  aria-label="update pages"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="reading status"
                >
                  <BookmarkIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="success"
                  aria-label="mark as read"
                >
                  <CheckCircleIcon fontSize="small" />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
