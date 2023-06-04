package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.logic.*;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController()
@RequestMapping("client")
public class ClientController {
    @Autowired
    serviceClient s;
    @Autowired
    AuthenticationManager authenticationManager;

    @CrossOrigin
    @GetMapping(value="")
    public List<Client> find() {
        return s.find();
    }



    @CrossOrigin
    @PostMapping(value="/login/{user}/{pass}")
    public ResponseEntity<String> login(@PathVariable() String user, @PathVariable() String pass) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user,pass)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping (value="/{user}/{pass}")
    public Client infoClient(@PathVariable() String user, @PathVariable() String pass) {
        Client c = s.findBy(user,pass);
        return c;
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
    @PutMapping(value ="/update")
    public Client updateClient(@RequestBody Client client) {
        if(s.update(client) != null)
            return client;
        return new Client();
    }


}
