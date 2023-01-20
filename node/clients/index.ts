import { IOClients } from '@vtex/api'
import { masterDataFor } from '@vtex/clients'
import { myEntity } from '../../masterdata/myEntity/schema' // Insert here the names of your data entity, store and app.
import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
}


public get entity() {
  return this.getOrSet('entity', masterDataFor<myEntity>('entity'))
}
