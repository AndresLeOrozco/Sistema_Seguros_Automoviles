package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Category;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Optional;

public interface CoverageRepo extends JpaRepository<Coverage,Integer> {

    @Override
    List<Coverage> findAll();

    Coverage findById(int id);

    List<Coverage> findCoveragesByCat_Id(int id);



}
