export type MassData = {
    planets: Planet[];
    greaterThanOrEqualTo: number;
  };
  
  export type VolData = {
    // something
    // Obs.: I did not see any use case for this one
  };
  
  export type Planet = {
    id: string,
    name: string,
    isPlanet: boolean,
    mass: { massValue: number, massExponent: number },
    vol: { volValue: number, volExponent: number },
    gravity: number,
    avgTemp: number,
    moonsCount?: number,
    moons?: string[],
  };
  
  export type Asteroid = {
    name: string, 
    discoveryYear: number, 
    orbitalPeriod: number
  };
  
  export type AllData = {
    planets: Planet[],
    asteroids: Asteroid[]
  };