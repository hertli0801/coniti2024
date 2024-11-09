"use client";
//componente funcional
//funncion de flecha
//funcion anonima
//funcion de expresion
//funcion de asignacion

//IIFE (Inmediately Invoked Function Expression)
//funcion de xpresion invocada inmediatamente

//funcion de expresion
import { useState } from "react";
import styles from "./page.module.css";
export default function Page() {
  const [tareas, setTareas] = useState([]);
  const [filtroPrioridad,setFiltroPrioridad]=useState("");
  const [filtroTexto, setFiltroTexto] = useState("");
  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: "",
    fecha: "",
    prioridad: "",
  });

  function handleChange(event) {
    setNuevaTarea({
      ...nuevaTarea,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeSearchTexto(event) {
    setFiltroTexto(event.target.value);
  }

  function handleChangeSearchPrioridad(event) {
    setFiltroTexto(event.target.value);
  }

  function agregarTarea() {
    const newListaTareas = tareas.slice();
    const newTarea = {
      nombre: nuevaTarea.nombre,
      fecha: nuevaTarea.fecha,
      prioridad: nuevaTarea.prioridad,
      creadoEl: new Date().toISOString(),
    };
    newListaTareas.push(newTarea);
    setTareas(newListaTareas);
    setNuevaTarea({
      nombre: "",
      fecha: "",
      prioridad: "",
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>to do List</h1>
        <input
          value={nuevaTarea.nombre}
          onChange={handleChange}
          type="text"
          placeholder="Agregar tarea"
          name="nombre"
        />

        <input
          type="date"
          name="fecha"
          onChange={handleChange}
          value={nuevaTarea.fecha}
        />

        <select
          name="prioridad"
          onChange={handleChange}
          value={nuevaTarea.prioridad}
        >
          <option value={""}>prioridad</option>
          <option value={"alta"}>Alta</option>
          <option value={"media"}>Media</option>
          <option value={"baja"}>Baja</option>
        </select>
        <button onClick={agregarTarea}>Agregar</button>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h4>Filtros</h4>
          <input
            type="text"
            placeholder="buscar tarea..."
            className={styles.busqueda}
            onChange={handleChangeSearchTexto}
            value={filtroTexto}
          />

          <div>
            <p>Ordenar por prioridad</p>
            <select className={styles.busqueda} onChange={handleChangeSearchPrioridad} value={filtroPrioridad}>
            <option value={""}>prioridad</option>
            <option value={"alta"}>Alta</option>
            <option value={"media"}>Media</option>
            <option value={"baja"}>Baja</option>
            </select>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <ul>
            {tareas
              .filter((tarea) =>
                tarea.nombre.toLowerCase().includes(filtroTexto.toLowerCase())
              )
              .filter(
                (tarea)=> {
                  if(filtroPrioridad === ""){
                    return true;
                  }
                  return tarea.prioridad === filtroPrioridad;
                }
              )
              .map(
                (tarea) => {
                  return (
                    <li key ={tarea.creadoEl} className={styles.tarea}>
                      <h6>{tarea.nombre}</h6>
                      <p>{tarea.fecha}</p>
                      <p>{tarea.prioridad}</p>
                    </li>
                  );
                } //callback
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
//<div></div>= etiqueta de html
