export interface Message {
  id: number;
  time: string;
  truckId: number;
  imei: string;
  lat: number;
  lon: number;
  speed: number;
  height: number;
  mileage: number;
  engineOilPressure: number;
  boostPressure: number;
  coolantPressure: number;
  injectorRailPressure: number;
  engineTemperature: number;
  fuelTemperature: number;
  engineRPM: number;
  onboardVoltage: number;
  engineSpeed: number;
  totalMileage: number;
  acceleratorPedalPosition: number;
  loadPercentage: number;
  fuelConsumption: number;
  transportSpeedOnWheels: number;
  seatBeltCondition: number;
  serviceBrakePedalPosition: number;
  tachographSpeed: number;
  dailyMileage: number;
  totalEngineRunningTime: number;
  dailyFuelConsumption: number;
  totalFuelConsumption: number;
  axleLoad1: number;
  axleLoad2: number;
  axleLoad3: number;
  axleLoad4: number;
  axleLoad5: number;
  oilTemperature: number;
  instantOilConsumption: number;
  fuelLevel: number;
}

export type MessageField = keyof Message;

export enum MessageFields {
  Imei = "imei",
  Id = "id",
}
