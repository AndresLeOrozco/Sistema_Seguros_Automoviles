package com.ssa.sistema_seguros_automoviles.data.Repo;

import com.ssa.sistema_seguros_automoviles.logic.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//@Repository
public interface CardRepo extends JpaRepository<Card,Integer> {
    @Override
    List<Card> findAll();

    Card findCardByCard_number(long card_number);
}
