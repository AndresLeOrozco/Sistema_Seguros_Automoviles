package com.ssa.sistema_seguros_automoviles.view;

import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
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
