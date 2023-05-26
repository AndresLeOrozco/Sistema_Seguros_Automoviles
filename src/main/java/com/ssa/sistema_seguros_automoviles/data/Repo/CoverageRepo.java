package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CoverageRepo extends JpaRepository<Coverage,Integer> {
    @Override
    List<Coverage> findAll();

    Coverage findById(int id);


}
