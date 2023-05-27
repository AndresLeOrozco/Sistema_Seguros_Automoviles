package com.ssa.sistema_seguros_automoviles.data.Repo;


import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InsuranceRepo extends JpaRepository<Insurance,Integer> {
    @Override
    List<Insurance> findAll();


    Insurance findById(int id);

    Insurance findByVin(String vin);
}
