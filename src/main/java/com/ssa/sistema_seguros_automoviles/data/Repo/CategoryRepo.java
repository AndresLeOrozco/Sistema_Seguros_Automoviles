package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Category;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
    @Override
    List<Category> findAll();

    Category findById(int id);

    Category findByDescription(String description);
}
