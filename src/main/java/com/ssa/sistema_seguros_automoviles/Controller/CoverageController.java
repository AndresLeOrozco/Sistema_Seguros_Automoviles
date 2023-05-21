package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.data.Repo.CardRepo;
import com.ssa.sistema_seguros_automoviles.data.Repo.CoverageRepo;
import com.ssa.sistema_seguros_automoviles.logic.Card;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("coverage")
public class CoverageController {
    @Autowired
    CoverageRepo c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Coverage> find() {
        return c.findAll();
    }



}

