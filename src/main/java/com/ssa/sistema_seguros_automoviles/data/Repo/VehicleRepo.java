package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo extends JpaRepository<Vehicle,Integer> {
    Vehicle findVehicleByBrandAndModel(String brand,String Model);
    Vehicle findVehicleByBrandAndModelAndYear(String brand, String model, int year);
}
