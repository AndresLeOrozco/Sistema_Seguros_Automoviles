package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepo  extends JpaRepository<Client,Integer> {
    @Override
    List<Client> findAll();
}
