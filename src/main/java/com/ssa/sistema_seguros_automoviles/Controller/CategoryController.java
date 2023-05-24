package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.Category;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("category")
public class CategoryController {
    @Autowired
    serviceCategory c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Category> find() {
        return c.find();
    }

    @CrossOrigin
    @PostMapping
    public int save(@RequestBody Category cat) {
        try{
            if(this.c.save(cat))
                return 1;
        } catch(Exception e){
            System.out.println(e.toString());
        }
        return 0;
    }

}

