package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsuranceRepo extends JpaRepository<Insurance,Integer> {
}
