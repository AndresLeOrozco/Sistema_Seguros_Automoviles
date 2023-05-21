package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.data.Repo.CardRepo;
import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import com.ssa.sistema_seguros_automoviles.logic.Card;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("client")
public class ClientController {
    @Autowired
    ClientRepo c;

    @CrossOrigin
    @GetMapping(value="")
    public List<Client> find() {
        return c.findAll();
    }



}
