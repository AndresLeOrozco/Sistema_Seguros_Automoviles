package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.data.Repo.CoverageRepo;
import com.ssa.sistema_seguros_automoviles.data.Repo.InsuranceRepo;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("insurance")
public class InsuranceController {
    @Autowired
    InsuranceRepo c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Insurance> find() {
        return c.findAll();
    }



}
