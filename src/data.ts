import { Salon } from "./types/salon";

export const salones: Salon[] = [
    {
      nombre: "Salón 1",
      direccion: "Calle 123",
      capacidad: "100 personas",
      eventos: [
        {
          title: "Clase 1",
          start: new Date(2024, 3,22, 10, 0),
            end: new Date(2024, 3, 22, 12, 0),
        },
        {
          title: "Clase 2",
          start: new Date(2024, 3, 22, 14, 0),
          end: new Date(2024, 3, 22, 16, 0),
        },
        {
            title: "Clase 3",
            start: new Date(2024, 3, 24, 10, 0),
            end: new Date(2024, 3, 24, 12, 0),
        },
        {
            title: "Clase 4",
            start: new Date(2024, 3, 25, 10, 0),
            end: new Date(2024, 3, 25, 12, 0),
        }
      ],
    },

    {
      nombre: "Salón 2",
      direccion: "Calle 456",
      capacidad: "200 personas",
      eventos: [
        {
          title: "Evento 3",
          start: new Date(2024, 4, 1, 14, 0),
          end: new Date(2024, 4, 1, 16, 0),
        },
        {
          title: "Evento 4",
          start: new Date(2024, 4, 2, 14, 0),
          end: new Date(2024, 4, 2, 16, 0),
        },
      ],
    },

    {
      nombre: "Salón 3",
      direccion: "Calle 789",
      capacidad: "300 personas",
      eventos: [
        {
          title: "Evento 5",
          start: new Date(2024, 10, 1, 18, 0),
          end: new Date(2024, 10, 1, 20, 0),
        },
        {
          title: "Evento 6",
          start: new Date(2024, 10, 2, 18, 0),
          end: new Date(2024, 10, 2, 20, 0),
        },
      ],
    },
  ];
