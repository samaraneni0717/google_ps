function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {


    //return the min. number of refuelling stops
    //the car has to stop only when it needs fuel to reach the target
    let minGasStations = 0;
    while (target !== 0) {
        if (target <= startFuel) {
            break;
        }
        let pos = { pos: 0, fuel: 0 };
        pos = checkForGas(startFuel, stations, target);
        if (!pos.pos) {
            return -1
        }

        target = target - startFuel;
        startFuel = Math.abs(startFuel - pos.pos) + pos.fuel;
        minGasStations++;
    }
    return minGasStations;



};

function checkForGas(startFuel: number, stations: number[][], target:number) {
    //check if you can drive to the gas station with the existing fuel
    //returns position if you can drive to a gas station
    //returns -1 if you will run out of gas before reaching there
    let position = { pos: 0, fuel: 0 };
    for (let i = 0; i < stations.length; i++) {

        // if (stations[i][0] === startFuel) {
        //     position.pos = stations[i][0];
        //     position.fuel = stations[i][1];
        //     break;
        // }
       if (stations[i][0] <= startFuel) {
            position.fuel = Math.max(position.fuel, stations[i][1])
            if (stations[i][0] > position.pos && position.fuel > target-startFuel) {
                position.pos = stations[i][0];
                position.fuel = stations[i][1];
            }
        }
    }

    return position;
}

//console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]))
console.log(minRefuelStops(100, 50, [[25,50], [50,25]]))
