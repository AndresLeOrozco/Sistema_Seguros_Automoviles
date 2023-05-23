package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class serviceClient {
    @Autowired
    ClientRepo clientRepo;
    @Transactional
    public List<Client> find() {
        return clientRepo.findAll();
    }

    @Transactional
    public Client findBy(String us,String pas) {
        return clientRepo.findClientByUserAndPassword(us,pas);
    }

    @Transactional
    public boolean save(Client c) {
        Client n = new Client();
        n = clientRepo.findByUser(c.getUsername());
        if (n == null){
            clientRepo.save(c);
            return true;
        }
        return false;
    }




}
