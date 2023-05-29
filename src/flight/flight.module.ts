import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { FLIGHT } from 'src/common/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerModule } from 'src/passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')), // Sirve para poder retornar toda la informacion de pasajeros.
      },
    ]), PassengerModule,
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule { }
