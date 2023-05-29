package com.ssa.sistema_seguros_automoviles.Controller;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceInsurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController()
@RequestMapping("insurance")
public class InsuranceController {
    @Autowired
    serviceInsurance c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Insurance> find() {
        return c.findInsurance();
    }

    @CrossOrigin
    @GetMapping(value="client/{id}")
    public List<Insurance> findAllById(@PathVariable int id) {
        return c.findAllInsuranceById(id);
    }

    @CrossOrigin
    @PostMapping
    public int save(@RequestBody Insurance insurance){
//        System.out.println("Client recuperado: " + insurance.getClient());
        System.out.println("Date recuperado: " + insurance.getDate());
        System.out.println("Cost recuperado: " + insurance.getCost());
        System.out.println(insurance.toString());
        return c.save(insurance);
    }

    @CrossOrigin
    @GetMapping("{vin}")
    public int findInsuranceByVin(@PathVariable String vin){
        return this.c.findInsuranceByVin(vin);
    }



}
