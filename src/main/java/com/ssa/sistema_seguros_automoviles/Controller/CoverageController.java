package com.ssa.sistema_seguros_automoviles.Controller;


import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceCoverage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController()
@RequestMapping("coverage")
public class CoverageController {
    @Autowired
    serviceCoverage c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Coverage> find() {
        return c.findCoverage();
    }

    @CrossOrigin
    @GetMapping(value = "{id}")
    public  Coverage findById(@PathVariable String id){return  c.findById(parseInt(id));}



}

