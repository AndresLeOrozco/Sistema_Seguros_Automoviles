package com.ssa.sistema_seguros_automoviles.Controller;


import com.ssa.sistema_seguros_automoviles.logic.Category;
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
    public  Coverage findById(@PathVariable int id){return  c.findById(id);}

    @CrossOrigin
    @PostMapping
    public int save(@RequestBody Coverage cov) {
        try{
            if(this.c.save(cov))
                return 1;
        } catch(Exception e){
            System.out.println(e.toString());
        }
        return 0;
    }

    @CrossOrigin
    @GetMapping(value = "cat/{id}")
    public List<Coverage> findCovList(@PathVariable int id) {
        return c.findCovList(id);
    }

}

