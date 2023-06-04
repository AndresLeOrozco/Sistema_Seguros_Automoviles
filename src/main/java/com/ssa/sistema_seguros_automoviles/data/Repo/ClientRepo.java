package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface ClientRepo  extends JpaRepository<Client,Integer> {
    @Override
    List<Client> findAll();

    Client findClientByUserAndPassword(String us,String pas);


    Client findByUser(String user);

    Client findClientById(int id);

    Optional<Client> findByUserAndPassword(String u,String pass);

}
