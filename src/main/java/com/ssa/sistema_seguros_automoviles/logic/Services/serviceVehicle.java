package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class serviceVehicle {
    @Autowired
    VehicleRepo vehicleRepo;
    @Transactional
    public List<Vehicle> findVehicle() {
        return vehicleRepo.findAll();
    }


}