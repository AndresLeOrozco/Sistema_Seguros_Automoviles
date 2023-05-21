package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.*;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("client")
public class ClientController {
    @Autowired
    serviceClient s;

    @CrossOrigin
    @GetMapping(value="")
    public List<Client> find() {
        return s.findClient();
    }



}
