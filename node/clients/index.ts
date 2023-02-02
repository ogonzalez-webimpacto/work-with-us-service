import { IOClients } from '@vtex/api'
import { masterDataFor } from '@vtex/clients'
import { Candidates } from 'Candidates' // Insert here the names of your data entity, store and app.
import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
}


public get entity() {
  return this.getOrSet(
    'entity', 
    masterDataFor<Candidates>('candidatos')
    )
}

/*
eyJhbGciOiJFUzI1NiIsImtpZCI6IjA0QkNCNzg3QjYzOTkzOEE4ODczODE1OTgyMEQxOTE1NUYyMDU0QUMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJvZ29uemFsZXpAd2ViaW1wYWN0by5lcyIsImFjY291bnQiOiJ3ZWJpbXBhY3RvIiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiI4NDFlYjNlNC04YTM2LTQxNzctYTU2ZC03YzhhODBmZWQ5ZDEiLCJleHAiOjE2NzQ3NTEzMDMsInVzZXJJZCI6IjllZDNhMDUzLTVmZTMtNGNiNS04NjQ0LWM3Y2M2ZjQwYzAwNCIsImlhdCI6MTY3NDY2NDkwMywiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjRhNmQ2OTVlLWQ3ODgtNGI1Mi1iMTI5LTQ5YjJkZjM3Y2E5MiJ9.yFqqXgVzh_Rx2HcLNfyJahnrAeG8GB2Xo1qxDq7gplDDN_cnDuDSf47IfJJxwqJUUWDrNGkeVcJrB03Cwx3ctg

*/
