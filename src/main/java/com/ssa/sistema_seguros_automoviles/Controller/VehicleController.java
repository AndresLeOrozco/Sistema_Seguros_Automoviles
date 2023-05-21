package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.Services.serviceVehicle;
import com.ssa.sistema_seguros_automoviles.logic.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("vehicle")
public class VehicleController {
    @Autowired
    serviceVehicle c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Vehicle> find() {
        return c.findVehicle();
    }

}
