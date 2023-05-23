package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.*;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceClient;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.websocket.server.PathParam;
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
        return s.find();
    }


    @CrossOrigin
    @GetMapping(value="/name/{user}/{pass}")
    public Client findbyId(@PathVariable() String user,@PathVariable() String pass) {
        Client c = s.findBy(user,pass);
        if(c != null)
            return s.findBy(user,pass);
        return new Client();
    }

    @CrossOrigin
    @PostMapping
    public void save(@RequestBody Client c) {
        try{
            this.s.save(c);
        }catch(Exception e){
            System.out.println(e.toString());
        }
    }
}
