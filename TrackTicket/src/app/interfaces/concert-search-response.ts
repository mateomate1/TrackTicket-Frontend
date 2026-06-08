import { VenueDTO } from "./VenueDTO"

export interface searchResponse {
  idTicketMaster: string
  name: string
  date: string
  link: string
  artistName: string
  artistGenre: string
  artistLink: string
  venue: VenueDTO
}
