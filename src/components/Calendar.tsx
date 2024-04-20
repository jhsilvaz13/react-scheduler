import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { Event as EventType } from "react-big-calendar";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Select } from "@mui/material";
import dayjs from "dayjs";
import { salones } from "../data";

const localizer = dayjsLocalizer(dayjs);
const MyCalendar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState<Date | undefined>();
  const [end, setEnd] = useState<Date | undefined>();
  const [salon, setSalon] = useState(0);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setStart(start);
    setEnd(end);
    setOpen(true);
  };

  const handleEventAdd = () => {
    const newEvent: EventType = {
      title: title,
      start: start!,
      end: end!,
    };
    salones[salon].eventos?.push(newEvent);
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={3} style={{ padding: "1em" }}>
            <Typography variant="h5">Información del Edificio</Typography>
            <Typography variant="body1">Nombre: Edificio 1</Typography>
            <Typography variant="body1">Dirección: Calle 123</Typography>
            <Typography variant="body1">Capacidad: 500 personas</Typography>
            <Select
              native
              defaultValue="0"
              onChange={(e) => setSalon(parseInt(e.target.value))}
            >
                {salones.map((salon, index) => (
                    <option key={index} value={index}>
                    {salon.nombre}
                    </option>
                ))}
            </Select>
          </Paper>
          <Paper elevation={3} style={{ padding: "1em", marginTop: "1em" }}>
            <Typography variant="h5">Información del Salón</Typography>
            <Typography variant="body1">
              Nombre: {salones[salon].nombre}
            </Typography>
            <Typography variant="body1">
              Dirección: {salones[salon].direccion}
            </Typography>
            <Typography variant="body1">
              Capacidad: {salones[salon].capacidad}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Calendar
            localizer={localizer}
            events={salones[salon].eventos}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 1000 }}
            selectable
            onSelectSlot={handleSelectSlot}
          />
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Agregar evento</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Complete los campos para agregar un evento al calendario.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Título"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Box display="flex" justifyContent="space-between">
                <TextField
                  margin="dense"
                  label="Inicio"
                  type="datetime-local"
                  value={start?.toISOString().substring(0, 16)}
                  onChange={(e) => setStart(new Date(e.target.value))}
                />
                <TextField
                  margin="dense"
                  label="Fin"
                  type="datetime-local"
                  value={end?.toISOString().substring(0, 16)}
                  onChange={(e) => setEnd(new Date(e.target.value))}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={handleEventAdd}>Agregar</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCalendar;
