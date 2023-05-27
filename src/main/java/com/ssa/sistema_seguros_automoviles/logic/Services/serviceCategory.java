package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.CategoryRepo;
import com.ssa.sistema_seguros_automoviles.logic.Category;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
public class serviceCategory {
    @Autowired
    CategoryRepo categoryRepo;

    @Transactional
    public List<Category> find() {
        return categoryRepo.findAll();
    }

    public Category findById(int id){return categoryRepo.findById(id);}

    @Transactional
    public boolean save(Category c) {
        Category n = new Category();
        n = categoryRepo.findByDescription(c.getDescription());
        if (n == null){
            categoryRepo.save(c);
            return true;
        }
        return false;
    }
}