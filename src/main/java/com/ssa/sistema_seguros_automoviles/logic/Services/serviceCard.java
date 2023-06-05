package com.ssa.sistema_seguros_automoviles.logic.Services;
import com.ssa.sistema_seguros_automoviles.data.Repo.CardRepo;
import com.ssa.sistema_seguros_automoviles.logic.Card;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class serviceCard {
    @Autowired
    CardRepo cardRepo;
    @Transactional
    public List<Card> find() {
        return cardRepo.findAll();
    }


    public boolean save(Card c) {
        Card card = cardRepo.findCardByCard_number(c.getCard_number());
        if(card == null) {
            cardRepo.save(c);
            return true;
        }
        return false;
    }
}