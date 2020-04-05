import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje.interface'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  
  constructor(private afs: AngularFirestore) {  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
                                                                           .limit(5) );
    return this.itemsCollection.valueChanges()
               .pipe( map( (mensajes : Mensaje[]) => {
                            console.log(mensajes)
                            this.chats = [];
                            for (const mensaje of mensajes) {
                              this.chats.unshift(mensaje);
                            }
                            // return this.chats;
                      }));
  }

  agregarMensaje( texto:string ){
    let mensaje:Mensaje = {
      nombre: "Alex",
      mensaje: texto, 
      fecha: new Date().getTime(),
      uid: "TODO: Agregar al hacer la autentificacion"
    }

    return this.itemsCollection.add(mensaje);
  }

}
