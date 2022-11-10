import { Checkbox, Grid, Typography } from "@mui/material";
import { axiosClient } from "../../config";
import "./style.css";
import moment from "moment";

export const TaskComp = ({ task, text, time, status, setUpdate }) => {
  const updateTask = (event) => {
    event.preventDefault();

    axiosClient
      .put(`tasks/${task.id}`, {
        ...task,
        status: status === "completed" ? "incomplete" : "completed",
      })
      .then((response) => {
        if (response.status === 200) {
          setUpdate(response.data.data);
        }
      });
  };

  return (
    <Grid container spacing={1} className="text">
      <Grid item>
        <Checkbox
          color="default"
          checked={status}
          onClick={updateTask}
          sx={{
            color: "#DADADA",
            fontSize: "24px",
          }}
        />
      </Grid>

      <Grid item>
        <Typography
          sx={{
            color: status === "completed" ? "#B9B9BE" : "#575767",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {text}
        </Typography>
        {!status === "completed" && (
          <Typography sx={{ color: "#B9B9BE" }}>
            ⏰ {moment(time).format("YYYY-MM-DD HH:mm")}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
