import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {
  async orderFuel() {}

  async maintenance() {}

  async getFines() {
    return []
  }

  async getParkings() {
    return []
  }

  async getPetrolStations() {
    return []
  }
}
