package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.Category;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import com.ssa.sistema_seguros_automoviles.logic.Coverage;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

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
    @GetMapping(value = "{id}")
    public Category findById(@PathVariable int id){return  c.findById(id);}

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

