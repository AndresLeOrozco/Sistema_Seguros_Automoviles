package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;

import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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

    public List<Insurance> findAllInsuranceById(int id) {
        return insuranceRepo.findAllByIdClient(id);
    }

    @Transactional
    public  int findInsuranceByVin(String vin){
        Insurance n = new Insurance();
        n = this.insuranceRepo.findByVin(vin);
        if (n == null){
            return 1;
        }
        return 0;
    }

    @Transactional
    public int save(Insurance insurance){
        Insurance n = new Insurance();
        n = this.insuranceRepo.findByVin(insurance.getVin());
        if (n == null){
            this.insuranceRepo.insertInsurance(insurance.getIdvehicle(),
                    insurance.getPay_meth(), insurance.getVin(),
                    insurance.getIdClient(), insurance.getCost(),
                    insurance.getDate());

            insurance.setId(this.insuranceRepo.findByVin(insurance.getVin()).getId());
            System.out.println(insurance.getId());
            int id_ins = insurance.getId();
            for (Coverage c : insurance.getCover()){
                int id_cov = c.getId();

                System.out.println("Id de Coverage: " + c.getId());
                System.out.println("Id de Insurance: " + insurance.getId());
                this.insuranceRepo.insertInsCov(id_cov, id_ins);
            }
            return 1;
        }
        return 0;
    }



}