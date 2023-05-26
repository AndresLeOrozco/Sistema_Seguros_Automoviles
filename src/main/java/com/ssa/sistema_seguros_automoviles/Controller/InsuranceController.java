package com.ssa.sistema_seguros_automoviles.Controller;


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
    @PostMapping
    public int save(@RequestBody Insurance insurance){
        System.out.println(insurance.getCover().toString());
        return c.save(insurance);
    }

    @CrossOrigin
    @GetMapping("{vin}")
    public int findInsuranceByVin(@PathVariable String vin){
        return this.c.findInsuranceByVin(vin);
    }



}
