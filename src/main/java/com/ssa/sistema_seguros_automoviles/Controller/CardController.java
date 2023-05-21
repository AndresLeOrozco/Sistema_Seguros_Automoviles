package com.ssa.sistema_seguros_automoviles.Controller;
import com.ssa.sistema_seguros_automoviles.logic.*;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("card")
public class CardController {
    @Autowired
    serviceCard c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Card> find() {
        return c.find();
    }



}
