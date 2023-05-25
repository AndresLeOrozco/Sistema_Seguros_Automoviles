package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class serviceCoverage {
    @Autowired
    CoverageRepo coverageRepo;
    @Transactional
    public List<Coverage> findCoverage() {
        return coverageRepo.findAll();
    }

    @Transactional
    public  Coverage findById(int id){return coverageRepo.findById(id);}
}