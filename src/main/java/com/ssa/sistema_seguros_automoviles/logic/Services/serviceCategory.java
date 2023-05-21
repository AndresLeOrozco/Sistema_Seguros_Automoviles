package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.CategoryRepo;
import com.ssa.sistema_seguros_automoviles.logic.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class serviceCategory {
    @Autowired
    CategoryRepo categoryRepo;

    @Transactional
    public List<Category> find() {
        return categoryRepo.findAll();
    }
}