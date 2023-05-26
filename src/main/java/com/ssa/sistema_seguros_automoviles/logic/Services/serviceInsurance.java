package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;

import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class serviceInsurance {
    @Autowired
    InsuranceRepo insuranceRepo;
    @Transactional
    public List<Insurance> findInsurance() {
        return insuranceRepo.findAll();
    }

    @Transactional
    public int save(Insurance insurance){
        Insurance n = new Insurance();
        n = this.insuranceRepo.findById(insurance.getId());
        if (n == null){
            this.insuranceRepo.save(insurance);
            return 1;
        }
        return 0;
    }

}