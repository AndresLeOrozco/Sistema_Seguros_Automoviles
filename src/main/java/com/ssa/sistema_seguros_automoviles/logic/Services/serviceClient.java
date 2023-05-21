package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@org.springframework.stereotype.Service
public class serviceClient {
    @Autowired
    ClientRepo clientRepo;
    @Transactional
    public List<Client> findClient() {
        return clientRepo.findAll();
    }


}
