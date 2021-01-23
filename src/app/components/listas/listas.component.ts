import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../interfaces/tareas';
@Component({
  selector: 'lista',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListaComponent {
  tituloTarea: string;
  tareas: Tareas[];
  idLista:number; 
  antesDeEditar: string;
  filtro: string;
  
  constructor() {
    this.filtro = 'todos';
    this.antesDeEditar = '';
    this.idLista = 5; 
    this.tituloTarea = '';
    this.tareas = [
      {
        'id': 1,
        'tarea': 'Terminar el proyecto',
        'completado': false,
        'editado': false,
      },

      {
        'id': 2,
        'tarea': 'Hacer ejercicio',
        'completado': false,
        'editado': true,
      },

      {
        'id': 3,
        'tarea': 'Estar listo para exponer',
        'completado': true,
        'editado': false,
      },

      {
        'id': 4,
        'tarea': 'Sacar la basura',
        'completado': true,
        'editado': false,
      },
    ];
  }
   
  addTarea(): void {
    if(this.tituloTarea.trim().length == 0){
      return;
    }

    this.tareas.push({
      id: this.idLista,
      tarea: this.tituloTarea,
      completado: false,
      editado: false
    })

    this.tituloTarea = '';
    this.idLista++;
  }

  editTarea(tarea: Tareas): void{
    this.antesDeEditar = tarea.tarea;
    tarea.editado = true;
  }

  finEdit(tarea : Tareas):void{
    if (tarea.tarea.trim().length === 0) {
      tarea.tarea = this.antesDeEditar;
    }
    tarea.editado = false;
  }
  
  cancelarEdit(tarea : Tareas):void{
    tarea.tarea = this.antesDeEditar;
    tarea.editado = false;
  }

  deleteTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  todosFiltro(): Tareas[]{
    if (this.filtro == 'todos') {
      return this.tareas
    }else if (this.filtro == 'activos') {
      return this.tareas.filter(todo => !todo.completado)
    }else if (this.filtro == 'completados') {
      return this.tareas.filter(todo => todo.completado)
    }
    return this.tareas
  }

  total():number{
    return this.tareas.filter(tareas => tareas.id).length;
  }

  completados():number{
    return this.tareas.filter(tareas => tareas.completado).length;
  }

  restantes():number{
    return this.tareas.filter(tareas => !tareas.completado).length;
  }

}