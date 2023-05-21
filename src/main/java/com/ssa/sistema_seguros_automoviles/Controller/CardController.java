package com.ssa.sistema_seguros_automoviles.Controller;
import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("card")
public class CardController {
    @Autowired
    CardRepo c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Card> find() {
        return c.findAll();
    }



}
