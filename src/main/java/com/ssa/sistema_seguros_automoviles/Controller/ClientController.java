package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.*;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController()
@RequestMapping("client")
public class ClientController {
    @Autowired
    serviceClient s;

    @CrossOrigin
    @GetMapping(value="")
    public List<Client> find() {
        return s.find();
    }


    @CrossOrigin
    @GetMapping(value="/login/{user}/{pass}")
    public Client login(@PathVariable() String user, @PathVariable() String pass) {
        Client c = s.findBy(user,pass);
        if(c != null)
            return s.findBy(user,pass);
        return new Client();
    }

    @CrossOrigin
    @PostMapping
    public int save(@RequestBody Client c) {
        c.setType_cli(2);
        try{
            if(this.s.save(c))
                return 1;
        }catch(Exception e){
            System.out.println(e.toString());
        }
        return 0;
    }
    @CrossOrigin
    @PutMapping("/{clientId}/update")
    public Client updateClient(@PathVariable Integer clientId, @RequestBody Client client) {
        if(s.update(client) != null)
            return client;
        return new Client();
    }


}
